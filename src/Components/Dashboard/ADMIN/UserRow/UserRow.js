import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';


const UserRow = ({ userInfo, index, refetch  }) => {
  const [user] = useAuthState(auth);

  // const { email } = userInfo;
  const { email, role } = userInfo;


  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 403) {
                toast.error('Failed to Make an Admin');
            }
            return res.json()
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully Made an Admin`);
            }

        })
}



  const handleDelete = (email) => {
    Swal.fire({
        text: "Are you sure you want to delete this?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
        if (result.value) {
            fetch(`http://localhost:5000/users/admin/${email}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged || data.deleteCount) {
                        // toast.success(`Doctor: ${name} is deleted`)
                        refetch();
                    }
                });
        }
    });
};


  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
      <td>
        <label
          onClick={() => handleDelete(userInfo)}
          htmlFor="user-delete-confirm-modal"
          className="btn btn-xs btn-primary text-white"
        >
          Remove User
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
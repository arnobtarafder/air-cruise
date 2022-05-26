import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';


const UserRow = ({ user: userInfo, index, refetch  }) => {
  const [user] = useAuthState(auth);

  const { name, specialty, img } = userInfo;
  const { email, role } = userInfo;


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
            fetch(`https://medico-healer.herokuapp.com/doctors/${email}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged || data.deleteCount) {
                        toast.success(`Doctor: ${name} is deleted`)
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
      <td>{role}</td>
      <td>
        <label
          onClick={() => handleDelete(userInfo)}
          htmlFor="user-delete-confirm-modal"
          className="btn btn-xs btn-primary text-white"
        >
          Delete User
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
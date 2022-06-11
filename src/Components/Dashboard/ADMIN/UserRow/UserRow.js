import React from 'react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';


const UserRow = ({ userInfo, refetch, index }) => {
    const { email, role } = userInfo;

    const makeAdmin = () => {
       Swal.fire({
        title: "Are you sure?",
        text: "You are giving admin role to him!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
       }).then(result => {
        if (result.isConfirmed) {

        fetch(`https://air-cruise.herokuapp.com/users/admin/${email}`, {
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
       })
    }

    
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role === "admin" ? <p>Admin</p> : <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;
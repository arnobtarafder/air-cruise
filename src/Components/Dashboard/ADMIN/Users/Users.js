import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import auth from "../../../../firebase.init";
import Loading from "../../../General/Loading/Loading";
// import UserDeleteConfirmModal from "./UserDeleteConfirmModal";
import UserRow from "../UserRow/UserRow";

const Users = () => {
  const [setDeletingUser] = useState(null);
  const [user] = useAuthState(auth);

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://air-cruise.herokuapp.com/users", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }


  
  const handleDelete = id => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        const url = `https://air-cruise.herokuapp.com/users/${user?.email}`
        console.log(url);
        fetch(url, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                icon: 'success',
                title: 'deleted done',
              })

            }
            refetch()

            console.log(data)
          })

      }
    })

  }


  return (
    <div className="px-10 py-10 bg-base-300 h-screen rounded-md">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow
                index={index}
                key={user._id}
                userInfo={user}
                refetch={refetch}
                setDeletingUser={setDeletingUser}
                handleDelete={handleDelete}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
      {/* {deletingUser && (
        <UserDeleteConfirmModal
          deletingUser={deletingUser}
          setDeletingUser={setDeletingUser}
        ></UserDeleteConfirmModal>
      )} */}
    </div>
  );
};

export default Users;
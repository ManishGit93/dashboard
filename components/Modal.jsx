import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Modal = ({ isOpen, onClose, user, onEdit }) => {
  const baseUrl = `https://crudapi-demo1.onrender.com/users`;
  const [editedUser, setEditedUser] = useState(user);

  const handleSave = async () => {
    console.log("model", editedUser?._id);
    onEdit(editedUser);
    onClose();
    const payload = {
      // id:editedUser._id,
      firstname: editedUser.firstname,
      lastname: editedUser.lastname,
      phone: editedUser.phone,
      email: editedUser.email,
      address: editedUser.address
    };
    try {
      const resp = await axios.post(`${baseUrl}`, payload);
      const respd = await resp.data;
      console.log("ree", respd);
      toast.success(respd)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    isOpen && (
      <div className=" shadow-lg modal-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg ">
        <div className="modal-content p-4 w-full">
          <h2 className="text-lg font-semibold">Edit User</h2>
          <form className="flex flex-col">
            <input
              type="text"
              name="firstname"
              value={editedUser?.firstname}
              onChange={(e) => setEditedUser({ ...editedUser, firstname: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded-md my-2"
            />

            <input
              type="text"
              name="Lastname"
              value={editedUser?.lastname}
              onChange={(e) => setEditedUser({ ...editedUser, lastname: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded-md my-2"
            />

            <input
              type="text"
              name="Phone"
              value={editedUser?.phone}
              onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded-md my-2"
            />
            <input
              type="text"
              name="email"
              value={editedUser?.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded-md my-2"
            />
            <div className="flex">
              <button onClick={handleSave} className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
                Save
              </button>
              <button onClick={onClose} className="bg-red-500 text-white px-2 py-1 rounded-md">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;

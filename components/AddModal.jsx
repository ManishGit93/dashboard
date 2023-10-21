import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const AddModal = ({ isOpen, onClose, user, updatedData }) => {
  const baseUrl = `https://crudapi-demo1.onrender.com/users`;
  const [addedUser, setAddedUser] = useState({
    firstname: "",
    phone: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    address: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();

    axios
      .post(baseUrl, addedUser)
      .then((response) => {
        toast.success(response.data);
        updatedData(addedUser)
        
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddedUser({
      ...addedUser,
      [name]: value
    });
  };

  return (
    isOpen && (
      <div className="w-[40%] z-10 shadow-lg modal-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg">
        <div className="modal-content p-4 w-full">
          <h2 className="text-lg font-semibold">Add User</h2>
          <form className="flex flex-col">
            <input
              type="text"
              name="firstname"
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md my-2"
              placeholder="Firstname"
            />

            <input
              type="text"
              name="lastname"
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md my-2"
              placeholder="Lastname"
            />

            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md my-2"
              placeholder="email"
            />

            <input
              type="text"
              name="phone"
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md my-2"
              placeholder="Phone"
            />

            <input
              type="text"
              name="address"
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md my-2"
              placeholder="address"
            />
            <div className="flex">
              <button onClick={handleSubmit} className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
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

export default AddModal;

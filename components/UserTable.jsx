import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import AddModal from "./AddModal";
import toast, { Toaster } from "react-hot-toast";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [addUser, setAddUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newUSER, setNewUSER] = useState(null);

  const handleEdit = async (item) => {
    setEditingUser(item);
  };

  const handleAdd = async () => {
    setAddUser(true);
  };

  const handlenewAdd = async (newUser) => {
    setData((prevData) => [...prevData, newUser]);
    setNewUSER(newUser);
  };

  const handleDelete = async (item) => {
    const res = confirm("Are you sure?");
    if (res === true) {
      try {
        const res = await axios.delete(`https://crudapi-demo1.onrender.com/users/${item?._id}`);
        const resp = await res.data;
        toast.success(resp);
        setData((prevData) => prevData.filter((user) => user._id !== item._id));
      } catch (error) {
        console.log("Error deleting user:", error);
      }
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
  };

  //getting users data
  const getData = async () => {
    try {
      const resp = await axios.get("https://crudapi-demo1.onrender.com/users");
      const respdata = await resp.data;
      setData(respdata);
      console.log(respdata);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      getData();
    
  }, []);

  useEffect(() => {
    if (newUSER) {
      getData();
    }
  }, [newUSER]);

  return (
    <section className="mt-6 md:flex relative  items-center justify-center gap-6 bg-white rounded-lg">
      {editingUser && (
        <Modal
          title={"Edit User"}
          isOpen={true}
          onClose={() => setEditingUser(null)}
          user={editingUser}
          onEdit={handleEdit}
        />
      )}
      {addUser && (
        <AddModal
          title={"Add User"}
          isOpen={true}
          onClose={() => setAddUser(null)}
          onAdd={handleAdd}
          updatedData={handlenewAdd}
        />
      )}
      <table className="min-w-full border-collapse table-auto rounded-lg">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="w-16 h-4 bg-gray-300 animate-pulse"></div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="w-16 h-4 bg-gray-300 animate-pulse"></div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="w-16 h-4 bg-gray-300 animate-pulse"></div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="w-16 h-4 bg-gray-300 animate-pulse"></div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="w-16 h-4 bg-gray-300 animate-pulse"></div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="w-16 h-4 bg-gray-300 animate-pulse"></div>
                  </td>
                </tr>
              ))
            : data?.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{item.firstname}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.lastname}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.address}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button onClick={() => handleAdd(item)} className="mr-2 text-green-500">
                      Add
                    </button>
                    <button onClick={() => handleEdit(item)} className="mr-2 text-blue-500">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item)} className="text-red-500">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000
        }}
      />
    </section>
  );
};

export default UserTable;

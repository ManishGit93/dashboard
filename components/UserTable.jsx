import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (item) => {
    // Set the user data you want to edit in the state.
    setEditingUser(item);
  };

  const handleDelete = (item) => {
    //
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
  };

  //getting users data
  const getData = async () => {
    try {
      const resp = await axios.get("https://crudapi-demo1.onrender.com/users");
      const respdata = await resp.data;
      setData(respdata);
      console.log(respdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="mt-6 md:flex relative  items-center justify-center gap-6 bg-white rounded-lg">
      {editingUser && (
        <Modal isOpen={true} onClose={() => setEditingUser(null)} user={editingUser} onEdit={handleEdit} />
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
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.firstname}</td>
              <td className="border border-gray-300 px-4 py-2">{item.lastname}</td>
              <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
              <td className="border border-gray-300 px-4 py-2">{item.email}</td>
              <td className="border border-gray-300 px-4 py-2">{item.address}</td>
              <td className="border border-gray-300 px-4 py-2">
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
    </section>
  );
};

export default UserTable;

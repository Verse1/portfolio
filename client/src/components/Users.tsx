import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
import axios from 'axios';

const Users = (props: any) => {
  return (
    <div className="rounded-lg bg-emerald-400 p-3 ">
      <p className="text-white">{props.user.username}</p>
      <p className="text-white">{props.user.email}</p>
      <p className="text-white">{props.user.role}</p>

      {props.user.approved ? (
        <p className="text-white">Approved</p>
      ) : (
        <div className="flex justify-center">
          <p className="text-white">Not Approved</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 mx-3 rounded focus:outline-none focus:shadow-outline" onClick={handleApprove}>
            <FcApproval />
          </button>
        </div>
      )}

      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );

  async function handleDelete(e: any) {
    e.preventDefault();
    try {
      const res = await axios.delete('/api/admin/users/' + props.user._id);
      props.stateChange(
        props.state.filter((user: any) => user._id !== props.user._id)
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleApprove(e: any) {
    e.preventDefault();
    try {
      const res = await axios.put('/api/admin/users/' + props.user._id);
      props.stateChange(
        props.state.map((user: any) => {
          if (user._id === props.user._id) {
            return { ...user, approved: true };
          } else {
            return user;
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  }
};

export default Users;

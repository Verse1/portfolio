import React from 'react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

const Skill = (props: any) => {
  return (
    <div>
      <p className="text-white">{props.skill.name}</p>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleClick}>
        <FaTrash />
      </button>
    </div>
  );

  async function handleClick(e: any) {
    e.preventDefault();

    try {
      const res = await axios.delete('/api/admin/skills/' + props.skill._id);

      props.stateChanger(
        props.state.filter((skill: any) => skill._id !== props.skill._id)
      );
    } catch (err) {
      console.log(err);
    }
  }
};

export default Skill;

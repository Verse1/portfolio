import React, { useState } from 'react';
import axios from 'axios';

const AddSkill = (props: any) => {
  const [skill, setSkill] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  return (
    <div className="grid place-items-center">
      <h1 className="text-white text-4xl my-11">Admin Dashboard</h1>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-center text-lg">Add skills</p>
        <p className="text-red-600 my-3">{error}</p>
        <p className="text-green-600 my-3">{success}</p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="skill">
            Skill
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="skill"
            type="text"
            onChange={(e) => setSkill(e.target.value)}
            value={skill}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
            type="button"
            onClick={handleClick}>
            Add
          </button>
        </div>
      </form>
    </div>
  );

  async function handleClick(e: any) {
    e.preventDefault();
    try {
      const res = await axios.post('/api/admin/skills', { skill });
      setSkill('');
      setSuccess('Skill added successfully');
      props.stateChanger(props.state.concat(res.data));
    } catch (err) {
      setSuccess('');
      setError('Error adding skill');
    }
  }
};

export default AddSkill;

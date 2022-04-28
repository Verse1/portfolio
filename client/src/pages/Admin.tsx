import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddSkill from '../components/AddSkill';
import Skill from '../components/Skill';

const Admin = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  const [skillsTab, setSkillsTab] = useState<boolean>(false);
  const [usersTab, setUsersTab] = useState<boolean>(false);

  const getSkills = () => {
    setSkillsTab(true);
    axios
      .get('/api/admin/skills')
      .then((res) => {
        setSkills(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const getUsers = () => {
    setUsersTab(true);
    axios
      .get('/api/admin/users')
      .then((res) => {
        setUsers(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="w-screen h-screen fixed">
      <div className="grid place-items-center">
        <h1 className="text-white text-4xl my-11">Admin Dashboard</h1>

        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={getSkills}>
            Skills
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={getUsers}>
            Users
          </button>
        </div>

        {skillsTab && (
          <div className="grid grid-cols-1 gap-4 mt-6">
            <AddSkill />
            {skills.map((skill) => (
              <Skill
                key={skill._id}
                skill={skill}
                state={skills}
                stateChanger={setSkills}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;

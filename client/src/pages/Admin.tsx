import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddSkill from '../components/AddSkill';
import Skill from '../components/Skill';

const Admin = () => {
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('/api/admin/skills')
      .then((res) => {
        setSkills(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-screen h-screen fixed">
      <div className="grid place-items-center">
        <h1 className="text-white text-4xl my-11">Admin Dashboard</h1>

        <AddSkill state={skills} stateChanger={setSkills} />
        {skills.map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
            state={skills}
            stateChanger={setSkills}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;

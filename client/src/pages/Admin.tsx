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
    <>
      <AddSkill state={skills} stateChanger={setSkills} />
      {skills.map((skill) => (
        <Skill key={skill._id} name={skill.name} />
      ))}
    </>
  );
};

export default Admin;

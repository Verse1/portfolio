import React from 'react';
import PropTypes from 'prop-types';

const Skill = (props: any) => {
  return (
    <div>
      <p className='text-white'>{props.name}</p>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Skill;

import React, { useState } from 'react';

const Request = () => {
  const [type, setType] = useState('show');
  const [title, setTitle] = useState('');

  return (
    <div>
      <h1>Request</h1>
      <form>
        <label htmlFor="type">Type</label>
        <input
          type="radio"
          name="type"
          value="show"
          checked={type === 'show'}
          onChange={(e) => setType(e.target.value)}
        />
        Show
        <input
          type="radio"
          name="type"
          value="movie"
          checked={type === 'movie'}
          onChange={(e) => setType(e.target.value)}
        />
        Movie
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </form>
    </div>
  );
};

export default Request;

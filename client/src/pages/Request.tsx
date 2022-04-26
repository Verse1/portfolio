import React, { useState } from 'react';

const Request = () => {
  const [type, setType] = useState('show');
  const [title, setTitle] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(title);
    setTitle('');
    setType('show');
    setSuccessMessage('Your request has been sent!');
  }

  return (
    <div>
      <h1>Request</h1>
      <p className="text-purple-400">{successMessage}</p>
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

import React, { useState } from 'react';

const Request = () => {
  const [type, setType] = useState('show');
  const [title, setTitle] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();

    if (title.length === 0) {
      setErrorMessage('Please enter a title :)');
      return;
    }

    console.log(title);
    setTitle('');
    setType('show');
    setSuccessMessage('Your request has been sent!');
    setErrorMessage('');
  }

  return (
    <div className="grid place-content-center text-white h-[80vh]">
      <h1 className="text-5xl my-6 text-center">Request</h1>
      <p className="text-purple-400">{successMessage}</p>
      <div className="bg-black p-6 rounded-3xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  ">
        <form>
          <label htmlFor="type" className="mb-3 text-lg">
            Type
          </label>
          <input
            type="radio"
            name="type"
            value="show"
            checked={type === 'show'}
            onChange={(e) => setType(e.target.value)}
            className="mr-2"
          />
          Show
          <input
            type="radio"
            name="type"
            value="movie"
            checked={type === 'movie'}
            onChange={(e) => setType(e.target.value)}
            className="mx-2"
          />
          Movie
          <label htmlFor="title" className="mb-4 text-lg">
            Title
                  </label>
                  
        <p className="text-black mb-2">{errorMessage}</p>

          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="rounded-md"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full block mt-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Request;

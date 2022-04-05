import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import axios from 'axios';

const Contact = () => {
  console.log(process.env.REACT_APP_SERVER);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // axios
    //   .post('/api/contact', {
    //     name,
    //     email,
    //     message,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     setName('');
    //     setEmail('');
    //     setMessage('');
    //     setOpen(true);
    //   })
    //   .catch((err) => console.log(err));

    console.log((await axios.get(process.env.REACT_APP_SERVER + '/')).data);
  };

  return (
    <div className="rounded-md bg-cyan-300 p-5 bottom-0 fixed right-0">
      {open ? (
        <>
          <button className="float-right">
            <AiFillCaretDown onClick={() => setOpen(false)} />
          </button>
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" className="resize-none" />
            <button
              type="submit"
              className=" rounded-md bg-slate-400 p-2 block m-auto mt-2">
              Send
            </button>
            <button onClick={onSubmit}>CLICK</button>
          </form>
        </>
      ) : (
        <button className="" onClick={() => setOpen(!open)}>
          Contact me
        </button>
      )}
    </div>
  );
};

export default Contact;

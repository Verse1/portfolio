import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-md bg-cyan-300 p-5 bottom-0 fixed right-0">
      {open ? (
        <>
          <button className='float-right'>
            <AiFillCaretDown
              onClick={() => setOpen(false)}
            />
          </button>
          <form method="post">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" className='resize-none' />
            <button type="submit" className=' rounded-md bg-slate-400 p-2 block m-auto mt-2'>Send</button>
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

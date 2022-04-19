import React from 'react'

const Login = () => {
  return (
      <div className='grid place-items-center'>
          <div className='text-white text-4xl my-11'>Login</div>
          <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 grid place-items-center'>
              <div className='p-5'>
                  <label className='block text-gray-700 text-sm font-bold mb-3' htmlFor='username'>Username</label>
                  <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5' id='username' type='text' placeholder='Username' />
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
                  <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5' id='password' type='password' placeholder='Password' />

                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                      Sign In
                  </button>
                  
              </div>
          </form>
          

                  


              </div>
          

  )
}

export default Login


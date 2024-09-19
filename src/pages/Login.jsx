import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {

      const userAPI = await axios.get('https://66e8e5d587e4176094476cbe.mockapi.io/user')
      setData(userAPI.data);
      console.log(data);

    } catch (error) {
      console.error('Fetching error, pesan: ' + error)
    }

  }

  useEffect(
    () => { getData() },
    []
  )


  return (
    <>
    {console.log("test")}
    {console.log(data)}
      <div className="h-screen w-screen bg-yellow-500 flex justify-center items-center"> {/*Container */}
        <div className="w-[15em] bg-blue-500 rounded-md p-2">
          <h1>Login fe-coffee-ukk</h1>
          <form
            action=""
            className='flex flex-col gap-2'
          >
            <input type="email" placeholder='youremail@example.com' className='mt-2' />
            <input type="password" placeholder='password' />
            <button type='submit' className='bg-gray-500 rounded-[4px]'>Login</button>
          </form>
          <p>Belum punya akun? <a href='/' className='underline'>Daftar</a></p>
        </div>
      </div>
    </>
  )
}

export default Login
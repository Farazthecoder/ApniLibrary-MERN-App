import React from 'react'
import myContext from '../context/context'
import { useContext } from 'react'
import toast from "react-hot-toast"

export default function Logout() {
  const { authUser,setAuthUser } = useContext(myContext);

  function handleLogout(){
       setAuthUser(null);
       localStorage.removeItem('user');
       toast.success("Logged out successfully")

  }
  return (
    <div>
      <button className='px-2 py-3 bg-red-600 cursor-pointer rounded-md text-white' onClick={handleLogout}>Logout</button>
    </div>
  )
}

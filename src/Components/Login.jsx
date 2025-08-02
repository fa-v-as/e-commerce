import React, { useState } from 'react'
import axios from "axios"
import { BackendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSumitHandler = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(BackendUrl + "/api/user/admin", { email, password })
      if (response.data.success) {
        setToken(response.data.token)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white px-4'>
      <div className='bg-[#1a1a1a] w-full max-w-md shadow-xl rounded-xl p-8 border border-gray-700'>
        <h1 className='text-3xl font-semibold text-center text-yellow-400 mb-6 tracking-wide'>BuYIT Admin</h1>

        <form onSubmit={onSumitHandler} className='space-y-5'>
          <div>
            <label className='block text-sm font-medium mb-1'>Email ID</label>
            <input
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full px-4 py-2 rounded-md bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400'
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Password</label>
            <input
              type="password"
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full px-4 py-2 rounded-md bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400'
            />
          </div>
          <button
            type="submit"
            className='w-full bg-yellow-500 text-black py-2 rounded-md hover:bg-yellow-400 transition-all font-semibold tracking-wide'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login


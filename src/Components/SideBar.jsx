import React from 'react'
import { NavLink } from "react-router-dom"
import { IoIosAddCircleOutline } from "react-icons/io"
import { IoIosList } from "react-icons/io"
import { CiCircleCheck } from "react-icons/ci"

const SideBar = () => {
  return (
    <div className='w-full sm:w-[18%] min-h-screen bg-[#111] border-r border-gray-700 text-white'>
      <div className='flex flex-col gap-4 pt-8 px-6 text-sm'>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 ${
              isActive ? "bg-yellow-500 text-black font-semibold" : ""
            }`
          }
          to="/add"
        >
          <IoIosAddCircleOutline className="text-xl" />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 ${
              isActive ? "bg-yellow-500 text-black font-semibold" : ""
            }`
          }
          to="/list"
        >
          <IoIosList className="text-xl" />
          <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-800 ${
              isActive ? "bg-yellow-500 text-black font-semibold" : ""
            }`
          }
          to="/orders"
        >
          <CiCircleCheck className="text-xl" />
          <p className='hidden md:block'>Orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default SideBar

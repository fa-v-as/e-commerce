import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BackendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { IoTrashBinOutline } from "react-icons/io5";

const List = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(BackendUrl + "/api/product/list")
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(BackendUrl + "/api/product/remove", { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <section className='min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] py-16 px-6 sm:px-12 text-white'>
      <div className="max-w-5xl mx-auto bg-[#1e1e1e] p-10 rounded-2xl shadow-2xl">
        <h1 className='text-4xl font-bold text-center mb-10 text-white'>All Items</h1>

        <div className='flex flex-col gap-2'>

          {/* Header */}
          <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 border border-gray-700 bg-[#2b2b2b] text-sm rounded-lg'>
            <b className='text-gray-300'>Image</b>
            <b className='text-gray-300'>Name</b>
            <b className='text-gray-300'>Category</b>
            <b className='text-gray-300'>Price</b>
            <b className='text-gray-300 text-center'>Action</b>
          </div>

          {/* Items */}
          {
            list.map((item, index) => (
              <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-3 px-4 border border-gray-700 bg-[#252525] text-sm rounded-lg hover:bg-[#2f2f2f] transition'>
                <img className='w-14 h-14 object-cover rounded-md' src={item.image[0]} alt={item.name} />
                <p className='text-white font-medium truncate'>{item.name}</p>
                <p className='text-gray-400 ml-4'>{item.category}</p>
                <p className='text-yellow-400'>{currency}{item.price}.00</p>
                <div className='text-right md:text-center'>
                  <IoTrashBinOutline
                    onClick={() => removeProduct(item._id)}
                    className='text-red-500 hover:text-red-600 text-xl cursor-pointer transition duration-200'
                  />
                </div>
              </div>
            ))
          }

          {list.length === 0 && (
            <div className='text-center py-10 text-gray-500'>No items available</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default List

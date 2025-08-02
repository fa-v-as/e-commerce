import React, { useState } from 'react'
import assets from "../assets/assets.js"
import axios from "axios"
import { BackendUrl } from "../App.jsx"
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Shoes")
  const [bestSeller, setBestSeller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestSeller", bestSeller)
      formData.append("sizes", JSON.stringify(sizes))
      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(BackendUrl + "/api/product/add", formData, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        setName(""); setDescription(""); setPrice("")
        setImage1(false); setImage2(false); setImage3(false); setImage4(false)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <section className='min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] py-16 px-6 sm:px-12 text-white'>
      <div className="max-w-5xl mx-auto bg-[#1e1e1e] p-10 rounded-2xl shadow-2xl">
        <h1 className='text-4xl font-bold text-center mb-10 text-white'>Add New Item</h1>
        <form onSubmit={onSubmitHandler} className='space-y-10'>

          {/* Image Upload */}
          <div>
            <label className='text-lg font-semibold block mb-4 text-gray-200'>Upload Images</label>
            <div className='flex flex-wrap gap-4'>
              {[image1, image2, image3, image4].map((img, index) => (
                <label key={index} htmlFor={`image${index + 1}`}>
                  <img className='w-24 h-24 object-cover rounded-md border border-gray-600 cursor-pointer bg-gray-800' src={!img ? assets.upload_area : URL.createObjectURL(img)} alt="" />
                  <input onChange={(e) => [setImage1, setImage2, setImage3, setImage4][index](e.target.files[0])} type="file" id={`image${index + 1}`} hidden />
                </label>
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className='text-lg font-semibold block mb-2'>Product Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='w-full bg-[#2b2b2b] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500'
              type="text"
              placeholder='Enter product name'
              required
            />
          </div>

          {/* Product Description */}
          <div>
            <label className='text-lg font-semibold block mb-2'>Product Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className='w-full bg-[#2b2b2b] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500'
              rows="4"
              placeholder='Enter product description...'
              required
            />
          </div>

          {/* Product Info */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            <div>
              <label className='text-lg font-semibold block mb-2'>Category</label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className='w-full bg-[#2b2b2b] text-white border border-gray-700 rounded-lg px-4 py-3'
              >
                <option value="Men">Men</option>
              </select>
            </div>

            <div>
              <label className='text-lg font-semibold block mb-2'>Subcategory</label>
              <select
                onChange={(e) => setSubCategory(e.target.value)}
                className='w-full bg-[#2b2b2b] text-white border border-gray-700 rounded-lg px-4 py-3'
              >
                <option value="Clothing">Clothing</option>
              </select>
            </div>

            <div>
              <label className='text-lg font-semibold block mb-2'>Price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className='w-full bg-[#2b2b2b] text-white border border-gray-700 rounded-lg px-4 py-3'
                type="number"
                placeholder='₹0.00'
              />
            </div>
          </div>

          {/* Product Sizes */}
          <div>
            <label className='text-lg font-semibold block mb-2'>Available Sizes</label>
            <div className='flex flex-wrap gap-3'>
              {["S", "M", "L", "XL", "XXL"].map(size => (
                <div
                  key={size}
                  onClick={() =>
                    setSizes(prev => prev.includes(size)
                      ? prev.filter(s => s !== size)
                      : [...prev, size])
                  }
                >
                  <p className={`px-4 py-2 rounded-lg cursor-pointer transition duration-200 ${sizes.includes(size)
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
                    {size}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bestseller */}
          <div className='flex items-center gap-3'>
            <input
              onChange={() => setBestSeller(!bestSeller)}
              type="checkbox"
              checked={bestSeller}
              id='bestSeller'
              className='accent-yellow-500 w-5 h-5'
            />
            <label htmlFor="bestSeller" className='text-white'>Add to Bestseller</label>
          </div>

          {/* Submit */}
          <div className='text-center'>
            <button type='submit' className='bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-600 transition'>Add Item</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Add

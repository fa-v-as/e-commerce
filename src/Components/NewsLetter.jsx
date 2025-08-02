import React from 'react'

const NewsLetter = () => {

  const onSubmitHandler=(event)=>{
    event.preventDefault()
  }

  return (
    <div className='text-center'>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
      </form>
    </div>
  )
}

export default NewsLetter
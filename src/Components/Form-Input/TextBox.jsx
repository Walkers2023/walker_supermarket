import React from 'react'

const TextBox = ({id, label, type, changeFunc, className, value}) => {

  return (
    <div className='flex justify-center'>

      <div className='flex-col w-full lg:w-1/2'>
        <h1 className='bg-secondary h-12 text-white pl-2 flex items-center'>NOTE:</h1>
        <textarea className={`${className} peer text_area border border-black p-2`} 
                  value={value} 
                  onChange={changeFunc} 
        >

        </textarea>
        <label htmlFor={id} className='label'>{label}</label>
      </div>


    </div>
  )
}

export default TextBox
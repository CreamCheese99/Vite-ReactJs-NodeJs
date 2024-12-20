import React from 'react'

function renderInput (label, name, type = 'text', onChange) {
  return (
    <div className="mb-4">
    <label className="block font-prompt text-gray-700" htmlFor={name}>{label}</label>
    <input className="border border-gray-300 p-2 rounded-xl w-full" 
      type={type}
      name={name} 
      id={name} 
      onChange={onChange}
    />
  </div>
  )
}

export default renderInput
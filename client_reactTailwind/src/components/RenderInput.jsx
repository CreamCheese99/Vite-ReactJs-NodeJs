import React from 'react'

function renderInput(label, type = 'text') {
  return (
    <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <input type={type} className="border border-gray-300 p-2 rounded w-full" />
  </div>
  )
}


export default renderInput

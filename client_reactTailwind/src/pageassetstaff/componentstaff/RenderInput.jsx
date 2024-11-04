// RenderInput.js
import React from 'react';

function renderInput(label, name, type = 'text') {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input type={type} name={name} className="border border-gray-300 p-2 rounded w-full" required />
    </div>
  );
}

export default renderInput;

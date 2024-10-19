import React from 'react'

function SidebarLink({name}) {
  return (
    <li>
    <a href="#" className="block p-2 hover:text-pink-600 hover:bg-gray-300 flex items-center justify-between">
      {name}
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </a>
  </li>
  )
}

export default SidebarLink
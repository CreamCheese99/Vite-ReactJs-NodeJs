
import React from 'react'
import { Link } from 'react-router-dom'
function SidebarLinkLogo({ nameLogo, to }) {
  return (
    <li>
    <Link to={to} className="block p-2 hover:text-pink-600 hover:bg-gray-300 flex items-center justify-between">
      {nameLogo}
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </Link>
  </li>
  )
}

export default SidebarLinkLogo


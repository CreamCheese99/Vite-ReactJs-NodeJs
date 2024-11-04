import React from 'react'

function Header() {
  return (
    <div className='flex items-center bg-gray-100 p-4'>
        <img src="src/image/logo.svg" alt="logo" className='h-8 w-auto mr-2' />
        <span className="font-prompt text-pink-600 text-lg font-bold">ระบบจัดการครุภัณฑ์</span>
    </div>
  )
}

export default Header
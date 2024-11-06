import React from 'react'
import InputField from './InputField'
import LogoSection from './LogoSection'

function LoginForm() {
  return (
    <div className="w-full space-y-14 max-w-lg px-[60px] py-[54px] bg-white rounded-3xl shadow-inner flex flex-col items-center">
    <LogoSection />

    <div className="w-96 space-y-8 text-left">
      <InputField label="Username" id="username" type="text" placeholder="Enter your username" />
      <InputField label="Password" id="password" type="password" placeholder="Enter your password" />
      <button className="w-full py-2 bg-pink-600 text-white text-base font-medium rounded-lg hover:bg-gray-300 transition duration-200">
        Login
      </button>
    </div>
  </div>
  )
}

export default LoginForm
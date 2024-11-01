// import React from 'react'
import LoginForm from '../components/LoginForm'


function Login() {
  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="w-full h-auto pt-1 pb-[37px] bg-white flex flex-col justify-start items-center gap-[100px]">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login


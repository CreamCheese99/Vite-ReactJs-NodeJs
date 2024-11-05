//original
// import React from 'react'
// import InputField from './InputField'
// import LogoSection from './LogoSection'

// function LoginForm() {
//   return (
//     <div className="w-full space-y-14 max-w-lg px-[60px] py-[54px] bg-white rounded-3xl shadow-inner flex flex-col items-center">
//     <LogoSection />

//     <div className="w-96 space-y-8 text-left">
//       <InputField label="Username" id="username" type="text" placeholder="Enter your username" />
//       <InputField label="Password" id="password" type="password" placeholder="Enter your password" />

//       {/* <div className="flex items-center text-xs">
//         <input id="googleAuth" type="checkbox" className="w-4 h-4 text-[#f04f81] border-gray-300 rounded focus:ring-pink-500" />
//         <label className="ml-2 text-[#333333]">ยืนยันตัวตนด้วยบริการของ Google โดยใช้ Email ของสถาบันฯ</label>
//       </div> */}

//       <button className="w-full py-2 bg-pink-600 text-white text-base font-medium rounded-lg hover:bg-gray-300 transition duration-200">
//         Login
//       </button>
//     </div>
//   </div>
//   )
// }

// export default LoginForm


//backup
import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField';
import LogoSection from './LogoSection';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password
      });

      if (response.data.message === 'Authentication successful') {
        alert('Login successful');
      }
    } catch (error) {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div className="w-full space-y-14 max-w-lg px-[60px] py-[54px] bg-white rounded-3xl shadow-inner flex flex-col items-center">
      <LogoSection />
      <div className="w-96 space-y-8 text-left">
        <InputField
          label="Username"
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="w-full py-2 bg-pink-600 text-white text-base font-medium rounded-lg hover:bg-gray-300 transition duration-200">
          Login
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default LoginForm;

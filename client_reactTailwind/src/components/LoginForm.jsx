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
// import React, { useState } from 'react';
// import axios from 'axios';
// import InputField from './InputField';
// import LogoSection from './LogoSection';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', {
//         username,
//         password
//       });

//       if (response.data.message === 'Authentication successful') {
//         alert('Login successful');
//       }
//     } catch (error) {
//       setErrorMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div className="w-full space-y-14 max-w-lg px-[60px] py-[54px] bg-white rounded-3xl shadow-inner flex flex-col items-center">
//       <LogoSection />
//       <div className="w-96 space-y-8 text-left">
//         <InputField
//           label="Username"
//           id="username"
//           type="text"
//           placeholder="Enter your username"
//           value={username}
//           onChange={e => setUsername(e.target.value)}
//         />
//         <InputField
//           label="Password"
//           id="password"
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin} className="w-full py-2 bg-pink-600 text-white text-base font-medium rounded-lg hover:bg-gray-300 transition duration-200">
//           Login
//         </button>
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       </div>
//     </div>
//   );
// }

// export default LoginForm;





//backup2
// import React, { useState } from 'react';
// import InputField from './InputField';
// import LogoSection from './LogoSection';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:5001/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       setMessage(data.message); // Authentication successful
//       console.log('User info:', data.user);
//       // Save user info in context or local storage here if needed
//     } else {
//       setMessage(data.message); // Invalid credentials
//     }
//   };

//   return (
//     <div className="w-full space-y-14 max-w-lg px-[60px] py-[54px] bg-white rounded-3xl shadow-inner flex flex-col items-center">
//       <LogoSection />

//       <form className="w-96 space-y-8 text-left" onSubmit={handleSubmit}>
//         <InputField 
//           label="Username" 
//           id="username" 
//           type="text" 
//           placeholder="Enter your username" 
//           value={username}
//           onChange={(e) => setUsername(e.target.value)} 
//         />
//         <InputField 
//           label="Password" 
//           id="password" 
//           type="password" 
//           placeholder="Enter your password" 
//           value={password}
//           onChange={(e) => setPassword(e.target.value)} 
//         />

//         <button 
//           type="submit" 
//           className="w-full py-2 bg-pink-600 text-white text-base font-medium rounded-lg hover:bg-gray-300 transition duration-200"
//         >
//           Login
//         </button>

//         {message && <p className="text-red-500">{message}</p>} {/* Show message from server */}
//       </form>
//     </div>
//   );
// }

// export default LoginForm;


//backup4
// import React, { useState } from 'react';
// import InputField from './InputField';
// import LogoSection from './LogoSection';

// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault(); // ป้องกันการรีเฟรชหน้า
    
//         console.log('Username:', username);
//         console.log('Password:', password);

//         const response = await fetch('http://localhost:5001/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         const data = await response.json();
//         if (data.success) {
//             console.log('Login successful:', data.user);
//             // คุณอาจจะต้องทำการเปลี่ยนเส้นทางหรือจัดเก็บข้อมูลผู้ใช้ที่นี่
//         } else {
//             setErrorMessage(data.message); // แสดงข้อความผิดพลาด
//         }
//     };

//     return (
//         <div className="w-full space-y-14 max-w-lg px-[60px] py-[54px] bg-white rounded-3xl shadow-inner flex flex-col items-center">
//             <LogoSection />
//             <form onSubmit={handleLogin} className="w-96 space-y-8 text-left">
//                 <InputField 
//                     label="Username" 
//                     id="username" 
//                     type="text" 
//                     placeholder="Enter your username" 
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <InputField 
//                     label="Password" 
//                     id="password" 
//                     type="password" 
//                     placeholder="Enter your password" 
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//                 <button 
//                     type="submit" 
//                     className="w-full py-2 bg-pink-600 text-white text-base font-medium rounded-lg hover:bg-gray-300 transition duration-200"
//                 >
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default LoginForm;


//Authentication successful
import React, { useState } from 'react';
import InputField from './InputField';
import LogoSection from './LogoSection';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // ป้องกันการรีเฟรชหน้า
    
        console.log('Username:', username);  // แสดงค่าที่กรอกในฟอร์ม
        console.log('Password:', password);

        // ส่งข้อมูลไปที่ backend
        const response = await fetch('http://localhost:5001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json(); // รับข้อมูลจาก backend
        console.log('Response from server:', data); // แสดงข้อมูลที่ได้รับจาก server

        if (data.success) {
            console.log('Login successful:', data.user);  // แสดงข้อมูลผู้ใช้
            // คุณอาจจะต้องทำการเปลี่ยนเส้นทางหรือจัดเก็บข้อมูลผู้ใช้ที่นี่
        } else {
            setErrorMessage(data.message); // แสดงข้อความผิดพลาด
        }
    };

    return (
        <div className="w-full space-y-14 max-w-lg px-[60px] py-[54px] bg-white rounded-3xl shadow-inner flex flex-col items-center">
            <LogoSection />
            <form onSubmit={handleLogin} className="w-96 space-y-8 text-left">
                <InputField 
                    label="Username" 
                    id="username" 
                    type="text" 
                    placeholder="Enter your username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputField 
                    label="Password" 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <button 
                    type="submit" 
                    className="w-full py-2 bg-pink-600 text-white text-base font-medium rounded-lg hover:bg-gray-300 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;

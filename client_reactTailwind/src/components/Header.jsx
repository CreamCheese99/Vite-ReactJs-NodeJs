import React from 'react';

function Header() {
  return (
    <div className='font-prompt flex items-center justify-between bg-gray-100 p-1/2'>
      <div className="flex items-center m-2">
        <img src="src/image/logo.svg" alt="logo" className='h-9 w-auto mr-4' />
        <div className="flex-1 items-center m-2">
          <span className="text-pink-600 text-lg font-bold block">ระบบจัดการครุภัณฑ์</span>
          <p className="text-gray-600 text-xs">คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี</p>
         <p className="text-gray-600 text-xs">สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
        </div>
      </div>

      <div className=" flex items-center justify-between bg-gray-100 p-4 x-4">
        <span className="text-gray-600 font-medium text-sm ml-2 text-pink-600">Thanchira</span>
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className=" w-6 h-6 ml-auto text-pink-600"> 
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </div>
    </div>
  );
}

export default Header;

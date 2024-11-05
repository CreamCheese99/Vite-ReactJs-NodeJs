import React from 'react';

function SearchForm() {
  return (
    
    <div className="font-prompt md:container md:mx-auto w-1/2 p-8 text-left ">
      <h2 className="font-prompt text-xl font-semibold text-pink-600 mb-4">สรุปข้อมูลพัสดุ</h2> 

      <div className="font-prompt flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col w-full md:w-1/2">
          <label className="font-prompt text-gray-700 text-sm font-semibold mb-1">ภาควิชา</label>
          <input
            type="text"
            placeholder="ภาควิชา"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 w-full"
          />
        </div>

            <div className="flex space-x-4 mt-4">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-1 text-sm md:mt-7">
                 ค้นหา
                </button>
            </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col w-full md:w-1/2">
          <label className="text-gray-700 text-sm font-semibold mb-1">รหัสพัสดุ</label>
          <input
            type="text"
            placeholder="รหัสพัสดุ"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 w-full"
          />
        </div>

            <div className="flex space-x-4 mt-4">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-1 text-sm md:mt-7">
                 ค้นหา
                </button>
            </div>
      </div>
    </div>
  );
}

export default SearchForm;

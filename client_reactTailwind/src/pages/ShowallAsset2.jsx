import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import AllAssets2 from '../components/AllAsset2';

function ShowAllAssets2() {
  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <SearchForm />
          <AllAssets2 />
        </div>
      </div>
    </div>
  );
}

export default ShowAllAssets2;


import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import DataTable from '../components/DataTable';
import AllAssets from '../components/AllAssets';

function ShowAllAssets() {
  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <SearchForm />
  
          <AllAssets />
        </div>
      </div>
    </div>
  );
}

export default ShowAllAssets;
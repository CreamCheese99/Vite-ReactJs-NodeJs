import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import DataTable from '../components/DataTable';

function AssetSummary() {
  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <SearchForm />
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default AssetSummary;





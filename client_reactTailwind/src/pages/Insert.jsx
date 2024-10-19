import React from 'react'
import Sidebar from '../components/Sidebar'
import Form from '../components/Form'
import Header from '../components/็Header'

function Insert() {
  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <Form />
      </div>
    </div>
  )
}

export default Insert


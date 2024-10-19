// import { useState,useEffect } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

import Header from './components/็Header'
import Sidebar from './components/Sidebar'
import Form from './components/Form'


function App() {
  // const [count, setCount] = useState(0);

  const fetchAPI = async () =>{
      const response = await axios.get("http://localhost:8080/api");
      console.log(response.data.username);
      console.log(response.data.timestamp);
  };

 useEffect(()  => {
   fetchAPI();
 },[])

 
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

export default App

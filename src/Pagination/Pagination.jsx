import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

const Pagination = () => {

    const[users,setusers] = useState([]);
    const[page,setpage] = useState(1);
    useEffect(()=>{
        axios.get()
    })

  return (
    <div>
          
    </div>
  )
}

export default Pagination
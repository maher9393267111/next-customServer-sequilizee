import React, {useState,useEffect} from 'react'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'

export default function HomePage() {

const createuser =async()=>{



const data ={
  name:'kaka',
  email:'kaka@gmail.com',
  password:'1211212',
  role:'admin'
}
// ${baseUrl}
const res =await axios.post(`/api/register`,data , { headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
},)

console.log('res--->>>', res)


}


  return (
    <div>
      <h1> <button onClick={createuser} className=''>Create User gain here ????</button></h1>
      
      
      
        </div>
  )
}

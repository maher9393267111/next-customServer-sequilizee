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
const res =await axios.post(`${baseUrl}/api/register`,data)

console.log('res--->>>', res)


}


  return (
    <div>
      <h1> <button onClick={createuser} className=''>Create User gain here</button></h1>
      
      
      
        </div>
  )
}

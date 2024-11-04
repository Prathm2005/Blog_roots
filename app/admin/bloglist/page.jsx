"use client"
import Blogtableitems from '@/Components/Admincomp/Blogtableitems'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Page = () => {
  const [blogs,setBlogs]=useState([]);
  const FetchBlogs=async ()=>{
    const apiUrl = process.env.NEXT_PUBLIC_API_URL; 
    const response=await axios.get(`${apiUrl}/api/blog`);
    setBlogs(response.data.blogs)
  }
  useEffect(()=>{
    FetchBlogs();

  },[])
  const deleteblog=async(mongoId)=>{
    const apiUrl = process.env.NEXT_PUBLIC_API_URL; 
    const response=await axios.delete(`${apiUrl}/api/blog`,{
      params:{
        id:mongoId 
      }
      
    })
    toast.success(response.data.msg)
    FetchBlogs();

  }
  return (
    <div className={"flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 mb-2"}>
      <h1>All Blogs</h1>
      <div className={"relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide"}>
        <table className={"w-full text-sm text-gray-500"}>
          <thead className={"text-sm text-gray-720 text-left uppercase bg-gray-150"}>
            <tr>
              <th scope='col' className={" px-6 py-3"}>
                Author Name
              </th>
              <th scope='col' className={" px-6 py-3"}>
                Blog Title
              </th>
              <th scope='col' className={" px-6 py-3"}>
              Blog Date
              </th>
              <th scope='col' className={" px-6 py-3"}>
              Action
              </th>
            </tr>

          </thead>
          <tbody >
            {blogs.map((item,index)=>{
              return <Blogtableitems key={index} mongoId={item._id} title={item.title} authorname={item.authorname} date={item.date}  deleteblog={deleteblog}/>
            })}
            
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default Page
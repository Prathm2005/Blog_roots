"use client"
import { assets } from '@/Assests/assets'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { toast } from 'react-toastify'
import { useState } from 'react'

const Page = () => {
  const [image,setImage]=useState(false);
  const [data,setData]=useState({
    title:"",
    description:"",
    category:"Lifestyle",
    authorname:"",
  })
  const onchangeHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setData(data=>({...data,[name]:value}));
    console.log(data);
    
  }
  const onsubmithandler=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('title',data.title)
    formData.append('description',data.description)
    formData.append('category',data.category)
    formData.append('authorname',data.authorname)
    formData.append('image',image)
    const response=await axios.post('/api/blog' ,formData)
    if(response.data.success){
      toast.success(response.data.msg)
      setImage(false)
      setData(
        {
          title:"",
          description:"",
          category:"Lifestyle",
          authorname:"",
        }
      )
    }
    else{
      toast.error("Error happened")
    }

  }
  return (
    <>
    <form onSubmit={onsubmithandler} className={"pt-5 px-5 sm:pt-12 sm:pl-16"}>
      <p className={"text-xl"}> Upload the Image </p>
      <label htmlFor="image">
        <Image className={"mt-2 cursor-pointer" } src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={80} alt=''/>
      </label>
      <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
      <p className={"text-xl mt-4"}>Blog title</p>
      <input name='title' onChange={onchangeHandler} value={data.title} className={"w-full sm:w-[500px] mt-4 py-3 px-4 border"} type="text"  id=""  placeholder='Enter the title' required/>
      <p className={"text-xl mt-4"}>Description</p>
      <textarea name='description' onChange={onchangeHandler} value={data.description} className={"w-full sm:w-[500px] mt-4 py-3 px-4 border"} type="text"  id=""  placeholder='Your content here' rows={6} required/>
      <p className={"text-xl mt-4"}>Author Name</p>
      <input  name='authorname' value={data.authorname} onChange={onchangeHandler} className={"w-full sm:w-[500px] mt-4 py-3 px-4 border"} type="text"  id=""  placeholder='Enter Your Name' required/>
      <p className={"text-xl mt-4"}>Blog Category</p>
      <select  className={"w-40 mt-4 px-4 py-3 border text-gray-600"} name="category"  onChange={onchangeHandler} value={data.category}>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Technology">Technology</option>
      </select>
      <br />
      <button className={"mt-8 w-40 mb-2 h-12 bg-gray-700 text-white"} type="submit">Add Blog</button>
    </form>
    </>
  )
}

export default Page
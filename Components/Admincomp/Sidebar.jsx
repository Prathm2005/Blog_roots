import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assests/assets'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
    <Link href={"/"} className="px-2 sm:pl-14 py-3 border border-gray-300 hover:bg-blue-100 transition duration-300 ease-in-out flex items-center">
        <Image src={assets.blogroot} width={120} alt="Blog Root" />
    </Link>

    <div className="w-28 sm:w-80 h-full relative py-12 border border-gray-300 shadow-lg rounded-lg bg-gray-100">
        <div className="w-[50%] sm:w-[80%] absolute right-0" />

        <Link href={"/admin/addprod"} className="mt-3 flex items-center border border-gray-300 gap-3 font-medium px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
            <Image src={assets.add_icon} alt="Add Icon" width={28} />
            <p>Add Blog</p>
        </Link>

        <Link href={"/admin/bloglist"} className="mt-3 flex items-center border border-gray-300 gap-3 font-medium px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
            <Image src={assets.blog_icon} alt="Blog Icon" width={28} />
            <p>Blog List</p>
        </Link>
    </div>
</div>

  )
}

export default Sidebar

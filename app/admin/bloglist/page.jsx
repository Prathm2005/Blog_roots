"use client";
import Blogtableitems from '@/Components/Admincomp/Blogtableitems';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const FetchBlogs = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL; 
            const response = await axios.get('/api/blog');
            setBlogs(response.data.blogs);
        } catch (error) {
            toast.error("Error fetching blogs");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        FetchBlogs();
    }, []);

    const deleteblog = async (mongoId) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL; 
            const response = await axios.delete(`${apiUrl}/api/blog`, {
                params: {
                    id: mongoId 
                }
            });
            toast.success(response.data.msg);
            FetchBlogs();
        }
    };

    return (
        <div className={"flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 mb-2"}>
            <h1>All Blogs</h1>
            <div className={"relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide"}>
                <table className={"w-full text-sm text-gray-500"}>
                    <thead className={"text-sm text-gray-720 text-left uppercase bg-gray-150"}>
                        <tr>
                            <th scope='col' className={" px-6 py-3"}>Author Name</th>
                            <th scope='col' className={" px-6 py-3"}>Blog Title</th>
                            <th scope='col' className={" px-6 py-3"}>Blog Date</th>
                            <th scope='col' className={" px-6 py-3"}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="4" className="text-center py-4">Loading...</td>
                            </tr>
                        ) : blogs.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No blogs available.</td>
                            </tr>
                        ) : (
                            blogs.map((item, index) => (
                                <Blogtableitems 
                                    key={index} 
                                    mongoId={item._id} 
                                    title={item.title} 
                                    authorname={item.authorname} 
                                    date={item.date}  
                                    deleteblog={deleteblog}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;

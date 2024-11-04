import React, { useState, useEffect } from 'react';
import Blogitems from './Blogitems';
import axios from 'axios';

const Bloglist = () => {
    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL; 
        try {
            const response = await axios.get('/api/blog'); 
            setBlogs(response.data.blogs);
            console.log(response.data.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };
    

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className={"px-5 lg:px-20"}>
            <div className={"flex justify-center gap-6 my-10"}>
                <button onClick={() => setMenu("All")} className={menu === "All" ? "bg-gray-700 text-white py-1 px-4 rounded-sm" : ""}> All Blogs</button>
                <button onClick={() => setMenu("Lifestyle")} className={menu === "Lifestyle" ? "bg-gray-700 text-white py-1 px-4 rounded-sm" : ""}>Lifestyle</button>
                <button onClick={() => setMenu("Technology")} className={menu === "Technology" ? "bg-gray-700 text-white py-1 px-4 rounded-sm" : ""}>Technology</button>
            </div>
            <div className={"flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-23"}>
                {blogs.filter((items) => menu === "All" ? true : items.category === menu).map((items, index) => {
                    return <Blogitems key={index} id={items._id} image={items.image} title={items.title} description={items.description} category={items.category} />
                })}
            </div>
        </div>
    );
}

export default Bloglist;

"use client";
import { assets, blog_data } from "@/Assests/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons"; 
import { faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { useRouter } from "next/navigation";
import Footer from "@/Components/Footer";
import axios from "axios";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [id, setId] = useState(null);

  useEffect(() => {
   
    const getId = async () => {
      const unwrappedParams = await params;
      setId(unwrappedParams.id);
    };
    getId();
  }, [params]);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`/api/blog`, {
        params: { id },
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (id) {
      fetchBlogData();
    }
  }, [id]);

  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return data ? (
    <>
      <div className="py-3 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={assets.blogroot}
              width={180}
              alt="Blog logo"
              className="w-[140px] sm:w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>
          <Link href={"/admin"}> 
          <button className="flex items-center gap-2 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full border border-solid border-black text-black hover:bg-black hover:text-white transition-colors duration-200">
            Start Blogging <Image alt="Arrow icon" src={assets.arrow} />
          </button>
        </Link>
        </div>

        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 mt-3 font-semibold py-2 px-4 rounded-full border border-solid border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faStepBackward} /> Back
        </button>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <p className="py-7">Author: {data.authorname}</p>
        </div>

        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
          <Image
            src={data.image}
            width={700}
            height={700}
            alt=""
            className="border-4 border-black"
            priority 
          />
          
         <div className={"blog-content"} dangerouslySetInnerHTML={{__html:data.description}}></div>
          

          <div className="my-24">
            <p className="text-black font-semibold my-4">
              Share this article on social media
            </p>
            <div className="flex gap-4">
              <a
                href={`https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-gray-600"
                  style={{ fontSize: "24px" }}
                  aria-label="Share on Instagram"
                />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(data.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-gray-600"
                  style={{ fontSize: "24px" }}
                  aria-label="Share on Twitter"
                />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-gray-600"
                  style={{ fontSize: "24px" }}
                  aria-label="Share on LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <div className="text-center py-10">Article not found</div>
  );
};

export default Page;

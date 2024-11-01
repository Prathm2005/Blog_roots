import React from "react";
import Image from "next/image";
import { assets } from "@/Assests/assets";
import Link from "next/link";

const Header = () => {
  const webload = () => {
    window.location.reload();
  };

  return (
    <div className="py-10 px-6 md:px-16 lg:px-32 position: sticky">
      <div className="flex justify-between items-center">
        <Image
          onClick={webload}
          src={assets.blogroot}
          width={180}
          alt="Blog logo"
          className="w-[140px] sm:w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
        />

        <div className="flex items-center gap-2">
          <Link href={"/admin"}>
            <button className="flex items-center gap-2 font-semibold py-2 px-6 sm:py-3 sm:px-6 rounded-full border border-solid border-black text-black hover:bg-black hover:text-white transition-colors duration-200">
            Create  <Image alt="Arrow icon" src={assets.arrow}  />
            </button>
          </Link>

          <Link href={"/contact"}>
          <button className="flex items-center gap-2 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full border border-solid border-black text-black hover:bg-black hover:text-white transition-colors duration-200">
            Contact 
          </button>
        </Link>
        </div>
      </div>

      <div className="text-center mt-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
          Discover the Latest Blogs
        </h1>
        <p className="mt-6 max-w-[740px] mx-auto text-sm sm:text-lg text-gray-600 leading-relaxed">
          Explore insightful articles on a variety of topics. Stay updated and
          inspired with curated content for the curious mind.
        </p>
      </div>
    </div>
  );
};

export default Header;

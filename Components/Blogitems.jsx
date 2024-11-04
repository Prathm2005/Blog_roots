import { assets } from "@/Assests/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blogitems = ({ title, description, category, image,id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white     rounded-lg overflow-hidden shadow-lg border border-black transition-transform hover:scale-105">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-[200px] object-cover border-b border-gray-300"
        />
      </Link>
      <p className="ml-5 mt-4 px-3 py-1 inline-block bg-gray-800 text-white text-xs rounded">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-semibold text-gray-900">{title}</h5>
        <p
          className="mb-4 text-sm text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></p>
        <Link href={`/blogs/${id}`}>
          <div className="inline-flex items-center text-blue-600 font-semibold cursor-pointer hover:text-blue-800 transition-colors duration-200 gap-1">
            Read more
            <Image alt="Arrow icon" src={assets.arrow} height={15} width={15} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blogitems;



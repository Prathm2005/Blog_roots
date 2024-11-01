import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assests/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faInstagram,faTwitter,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 bg-gray-200 border-t border-gray-200 text-gray-600">
      <Link className="cursor-pointer" href="/">
        <Image src={assets.blogroot} alt="Blog Logo" width={150} height={100} />
      </Link>
      <p className="text-center text-sm sm:text-base mt-4 sm:mt-0">
        &copy; {currentYear} blogroot, All Rights Reserved
      </p>
      <div className="flex gap-2  ">
        <a href="https://www.instagram.com/prathamesh_malunjkar/" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <FontAwesomeIcon icon={faInstagram} className="text-gray-600" style={{ fontSize: '24px' }} />
        </a>
        <a href="https://x.com/home?lang=en" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <FontAwesomeIcon icon={faTwitter} className="text-gray-600" style={{ fontSize: '24px' }} />
        </a>
        <a href="https://github.com/Prathm2005" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <FontAwesomeIcon icon={faGithub} className="text-gray-600" style={{ fontSize: '24px' }} />
        </a>
        <a href="https://www.linkedin.com/in/prathmesh-malunjkar-a47a29259/" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <FontAwesomeIcon icon={faLinkedin} className="text-gray-600" style={{ fontSize: '24px' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

"use client"
import { Outfit } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp} from "@fortawesome/free-solid-svg-icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {

  useEffect(() => {
    const toggleBackToTopButton = () => {
      const button = document.getElementById("backToTop");
      if (window.scrollY > 200) {
        button.classList.remove("hidden");
      } else {
        button.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", toggleBackToTopButton);

    return () => {
      window.removeEventListener("scroll", toggleBackToTopButton);
    };
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}

        
        <button 
          id="backToTop" 
          onClick={scrollToTop} 
          className="fixed bottom-5 right-5 p-3 bg-gray-600 text-white rounded-full shadow-lg hidden hover:bg-gray-700 focus:outline-none transition-all duration-300 "
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </body>
    </html>
  );
}

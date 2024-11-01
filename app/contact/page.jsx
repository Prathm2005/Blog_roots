"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faStepBackward } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram, faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { useRouter } from 'next/navigation';

const Contact = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="bg-white p-6 mt-0 md:p-8 rounded-lg shadow-lg text-gray-800 sm:h-full">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Contact Us</h1>
      
      <button
        onClick={handleGoBack}
        className="flex items-center bg-gray-200 text-gray-800 gap-2 mb-3 mt-3 font-semibold py-2 px-4 rounded-full border border-solid border-gray-300 hover:bg-gray-300 transition-colors duration-200"
      >
        <FontAwesomeIcon icon={faStepBackward} /> Back
      </button>
      
      <div className="contact-info mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Information</h2>
        <p className="flex items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" />
          <a href="mailto:prathmesh.malunjkar02@gmail.com" className="text-blue-500 hover:underline">prathmesh.malunjkar02@gmail.com</a>
        </p>
        <p className="flex items-center mb-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-600" />
          Phone: <a href="tel:+919356727487" className="text-blue-500 hover:underline">+(91) 9356727487</a>
        </p>
        <p className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-600" />
          Address: CRPF Camp, Talegaon Dabhade, Maharashtra 410506
        </p>
      </div>

      <div className="social-media mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Follow Us</h2>
        <ul className="flex gap-4 justify-center">
          <li><a href="https://x.com/home?lang=en" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
          <li><a href="https://github.com/Prathm2005" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
          <li><a href="https://www.linkedin.com/in/prathmesh-malunjkar-a47a29259/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
          <li><a href="https://www.instagram.com/prathamesh_malunjkar/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
        </ul>
      </div>

      <div className="map mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31590.77404945699!2d73.6580359!3d18.7211287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1e0f7af26a7%3A0xbc1e882649230580!2sCRPF%20Camp%2C%20Talegaon%20Dabhade%2C%20Maharashtra%20410506!5e0!3m2!1sen!2sus!4v1631578017746!5m2!1sen!2sus"
          width="100%" 
          height="300" 
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map Location"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

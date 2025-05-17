import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Contact Shri Kashi Tour & Travels
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're here to help you plan your perfect journey. Reach out anytime!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 transform hover:shadow-2xl transition duration-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Tell us about your travel plans..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-300 transform hover:scale-[1.02] shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Cards */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-xl p-8 md:p-10 transform hover:shadow-2xl transition duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Our Office</h3>
                  <p className="text-gray-600">DLW Road Kakarmata flyover ke niche, Varanasi, UP 221001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhoneAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+91 98765 43210 (24/7 Support)</p>
                  <p className="text-gray-600">+91 54321 67890 (Booking)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">info@shrikashitravels.com</p>
                  <p className="text-gray-600">bookings@shrikashitravels.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & WhatsApp */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 transform hover:shadow-2xl transition duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h2>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center bg-blue-600 text-white p-3 rounded-full w-12 h-12 hover:bg-blue-700 transition duration-300 transform hover:scale-110"
              >
                <FaFacebook className="text-xl" />
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center bg-sky-500 text-white p-3 rounded-full w-12 h-12 hover:bg-sky-600 transition duration-300 transform hover:scale-110"
              >
                <FaTwitter className="text-xl" />
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center bg-pink-600 text-white p-3 rounded-full w-12 h-12 hover:bg-pink-700 transition duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-xl" />
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center bg-green-500 text-white p-3 rounded-full w-12 h-12 hover:bg-green-600 transition duration-300 transform hover:scale-110"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4">
              <div className="flex items-center">
                <FaWhatsapp className="text-green-600 text-2xl mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800">WhatsApp Support</h3>
                  <p className="text-gray-600">Chat instantly with our travel experts</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition duration-300">
                Message Us on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115376.15285814503!2d82.92109015!3d25.3176458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="400" 
          style={{border:0}}
          allowFullScreen="" 
          loading="lazy"
          title="Varanasi Office Location"
          className="rounded-b-2xl"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
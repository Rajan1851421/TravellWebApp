import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-slide-in">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 animate-float">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Drop us a message below.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
              <p className="text-gray-600">
                Reach out to us anytime, we're here to help!
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> support@example.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> +1 (123) 456-7890
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Address:</span> 1234 Example St, City, Country
                </p>
              </div>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition duration-300 transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.59 8.08 8.36 9.44v-6.68H7.96v-2.76h2.44v-2.1c0-2.41 1.47-3.73 3.61-3.73 1.03 0 1.91.08 2.16.11v2.51h-1.48c-1.16 0-1.39.55-1.39 1.36v1.79h2.77l-.36 2.76h-2.41v6.68c4.77-1.36 8.36-5.03 8.36-9.44 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition duration-300 transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.95 4.83c-.88.39-1.83.65-2.82.77 1.01-.61 1.79-1.57 2.16-2.71-.95.56-2 .97-3.12 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.13 1.13-4.1-.21-7.73-2.17-10.16-5.16-.42.72-.66 1.55-.66 2.44 0 1.69.86 3.18 2.16 4.06-.8-.03-1.55-.24-2.21-.61v.06c0 2.36 1.68 4.33 3.91 4.78-.41.11-.84.17-1.28.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.06 2.09-.39 0-.78-.02-1.17-.07 2.17 1.39 4.75 2.2 7.52 2.2 9.03 0 13.97-7.48 13.97-13.97 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition duration-300 transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm.02 4.5h-5v16h5v-16zm7.98 0h-4.96v16h4.96v-8.62c0-4.88 6.36-5.34 6.36 0v8.62h4.96v-10.26c0-8.14-9.32-7.84-11.32-3.76v-2.6z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
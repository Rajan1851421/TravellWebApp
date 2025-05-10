import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-float">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 animate-slide-in">
            We are a passionate team dedicated to providing top-notch vehicle rental services, ensuring comfort and convenience for every journey.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to revolutionize the vehicle rental industry by offering reliable, affordable, and eco-friendly transportation solutions. We aim to make every trip memorable with our diverse fleet and exceptional customer service.
              </p>
            </div>
            <div className="animate-slide-in">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Car on road"
                className="rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 animate-slide-in">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                role: 'Founder & CEO',
                image: 'https://randomuser.me/api/portraits/men/1.jpg',
              },
              {
                name: 'Jane Smith',
                role: 'Operations Manager',
                image: 'https://randomuser.me/api/portraits/women/2.jpg',
              },
              {
                name: 'Alex Brown',
                role: 'Customer Support Lead',
                image: 'https://randomuser.me/api/portraits/men/3.jpg',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 animate-slide-in">
            Our Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Reliability', description: 'We ensure our vehicles are always ready for your journey.' },
              { title: 'Customer Focus', description: 'Your satisfaction is our top priority.' },
              { title: 'Sustainability', description: 'We promote eco-friendly travel options.' },
              { title: 'Innovation', description: 'We embrace technology to enhance your experience.' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 animate-slide-in transform hover:scale-105 transition duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
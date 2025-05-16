import React from 'react';

const tourPackages = [
  {
    title: "Varanasi Ghat Tour",
    description: "Experience the spiritual essence of Varanasi along the sacred Ganges River ghats.",
    image: "https://media.istockphoto.com/id/1163730768/photo/varanasi-ancient-city-architecture-at-sunset-as-viewed-from-a-boat-on-river-ganges.jpg?s=612x612&w=0&k=20&c=NMsfxM804TjK4ydwXAqQt20i8pFHyduUqYAl1wmrufE=",
    duration: "4 hours",
    price: "₹1,499"
  },
  {
    title: "Varanasi Temple Tour",
    description: "Visit the ancient temples of Varanasi, including the revered Kashi Vishwanath.",
    image: "https://images.unsplash.com/photo-1613323592850-9c92df8e70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "6 hours",
    price: "₹2,199"
  },
  {
    title: "Prayagraj Sangam Tour",
    description: "Witness the holy confluence of Ganga, Yamuna, and Saraswati in Prayagraj.",
    image: "https://images.unsplash.com/photo-1606147745148-72e9d5d7a7e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "Full day",
    price: "₹3,499"
  },
  {
    title: "Prayagraj Heritage Tour",
    description: "Explore the rich history of Prayagraj with visits to historical landmarks.",
    image: "https://images.unsplash.com/photo-1622464996878-3a18e9b4e0c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "5 hours",
    price: "₹2,499"
  },
  {
    title: "Sarnath Stupa Tour",
    description: "Discover the Dhamek Stupa in Sarnath, where Buddha gave his first sermon.",
    image: "https://images.unsplash.com/photo-1598810645433-4db50d8948e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "4 hours",
    price: "₹1,799"
  },
  {
    title: "Sarnath Monastery Tour",
    description: "Explore ancient monasteries and the serene ambiance of Sarnath.",
    image: "https://images.unsplash.com/photo-1598810645433-4db50d8948e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "3 hours",
    price: "₹1,499"
  },
  {
    title: "Durga Temple Tour",
    description: "Visit the vibrant Durga Temple in Varanasi, known for its striking architecture.",
    image: "https://images.unsplash.com/photo-1613323592850-9c92df8e70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "2 hours",
    price: "₹999"
  },
  {
    title: "Sankat Mochan Hanuman Temple Tour",
    description: "Seek blessings at the Sankat Mochan Hanuman Temple, a beloved Varanasi shrine.",
    image: "https://images.unsplash.com/photo-1613323592850-9c92df8e70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "2 hours",
    price: "₹999"
  }
];

const TourPackages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
            Spiritual Tour Packages
          </h1>
          <p className="text-blue-600/80 max-w-2xl mx-auto">
            Discover the divine essence of India's most sacred destinations with our expertly curated spiritual journeys
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tourPackages.map((tour, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/600x400?text=Tour+Image";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm font-medium">{tour.duration}</span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {tour.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {tour.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-blue-600 font-bold">{tour.price}</span>
                    <span className="text-blue-400 text-xs ml-1">per person</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-sm hover:shadow-md text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 px-8 rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
            View All Packages
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
import React, { useState } from 'react';

export default function ExploreVehicle() {
  // Dummy data for vehicles
  const vehiclesData = [
    {
      id: 1,
      name: 'Thunderbolt X1',
      price: '$45,000',
      type: 'SUV',
      year: 2023,
      mileage: '15,000 miles',
      fuel: 'Hybrid',
      transmission: 'Automatic',
      images: [
        'https://via.placeholder.com/400x300?text=Thunderbolt+X1+1',
        'https://via.placeholder.com/400x300?text=Thunderbolt+X1+2',
        'https://via.placeholder.com/400x300?text=Thunderbolt+X1+3',
      ],
      description: 'A powerful and eco-friendly SUV with advanced hybrid technology.',
    },
    {
      id: 2,
      name: 'Skyline GT',
      price: '$60,000',
      type: 'Sports Car',
      year: 2024,
      mileage: '5,000 miles',
      fuel: 'Petrol',
      transmission: 'Manual',
      images: [
        'https://via.placeholder.com/400x300?text=Skyline+GT+1',
        'https://via.placeholder.com/400x300?text=Skyline+GT+2',
      ],
      description: 'Sleek and fast, designed for performance enthusiasts.',
    },
    {
      id: 3,
      name: 'Eco Cruiser',
      price: '$35,000',
      type: 'Sedan',
      year: 2022,
      mileage: '20,000 miles',
      fuel: 'Electric',
      transmission: 'Automatic',
      images: [
        'https://via.placeholder.com/400x300?text=Eco+Cruiser+1',
        'https://via.placeholder.com/400x300?text=Eco+Cruiser+2',
        'https://via.placeholder.com/400x300?text=Eco+Cruiser+3',
      ],
      description: 'Zero-emission sedan with a sleek design and long range.',
    },
    {
      id: 4,
      name: 'Adventure Van',
      price: '$50,000',
      type: 'Van',
      year: 2023,
      mileage: '10,000 miles',
      fuel: 'Diesel',
      transmission: 'Automatic',
      images: [
        'https://via.placeholder.com/400x300?text=Adventure+Van+1',
        'https://via.placeholder.com/400x300?text=Adventure+Van+2',
      ],
      description: 'Perfect for road trips with spacious interiors.',
    },
  ];

  // State for modal, image carousel, and visible vehicles
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleVehicles, setVisibleVehicles] = useState(3);

  // Handle modal open
  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setCurrentImageIndex(0);
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedVehicle(null);
  };

  // Handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedVehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedVehicle.images.length - 1 : prev - 1
    );
  };

  // Handle show more
  const showMore = () => {
    setVisibleVehicles((prev) => Math.min(prev + 3, vehiclesData.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Explore Our Vehicles
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiclesData.slice(0, visibleVehicles).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(vehicle)}
            >
              <img
                src={vehicle.images[0]}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-blue-900">
                  {vehicle.name}
                </h2>
                <p className="text-lg font-bold text-blue-600">{vehicle.price}</p>
                <p className="text-sm text-gray-600">{vehicle.type}</p>
                <p className="text-sm text-gray-600">{vehicle.year}</p>
              </div>
            </div>
          ))}
        </div>

        {visibleVehicles < vehiclesData.length && (
          <div className="text-center mt-8">
            <button
              onClick={showMore}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-800 transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {/* Modal for detailed view */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full mx-4 p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative">
              <img
                src={selectedVehicle.images[currentImageIndex]}
                alt={selectedVehicle.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              {selectedVehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-blue-900">
                {selectedVehicle.name}
              </h2>
              <p className="text-xl font-semibold text-blue-600">
                {selectedVehicle.price}
              </p>
              <p className="text-gray-600">Type: {selectedVehicle.type}</p>
              <p className="text-gray-600">Year: {selectedVehicle.year}</p>
              <p className="text-gray-600">Mileage: {selectedVehicle.mileage}</p>
              <p className="text-gray-600">Fuel: {selectedVehicle.fuel}</p>
              <p className="text-gray-600">
                Transmission: {selectedVehicle.transmission}
              </p>
              <p className="text-gray-600 mt-2">
                Description: {selectedVehicle.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
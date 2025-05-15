import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import Car1 from "../../assets/Cars/Car1.png";
import Car2 from "../../assets/Cars/Car2.png";
import Car3 from "../../assets/Cars/Car3.png";
import Car4 from "../../assets/Cars/Car4.png";
import Car5 from "../../assets/Cars/Car5.png";
import Car6 from "../../assets/Cars/Car6.png";
import Car7 from "../../assets/Cars/Car7.png";

const vehicles = [
  {
    type: "Premium Car",
    image: Car1,
    description:
      "Luxury vehicles with premium features for business or leisure.",
    price: "$120/day",
    features: ["GPS", "Leather", "Bluetooth"],
  },
  {
    type: "Family Van",
    image: Car2,
    description: "Spacious and comfortable for family trips.",
    price: "$90/day",
    features: ["7 Seats", "Safety", "Large Trunk"],
  },
  {
    type: "Tour Bus",
    image: Car3,
    description: "Professional transportation for large groups.",
    price: "$250/day",
    features: ["50 Seats", "AC", "Entertainment"],
  },
  {
    type: "Luxury SUV",
    image: Car4,
    description: "Premium SUVs for all adventures.",
    price: "$150/day",
    features: ["4WD", "Sunroof", "Premium Sound"],
  },
  {
    type: "Compact Car",
    image: Car5,
    description: "Fuel-efficient and easy to park for city driving.",
    price: "$70/day",
    features: ["Eco Mode", "Compact Design", "Bluetooth"],
  },
  {
    type: "Convertible",
    image: Car6,
    description: "Enjoy open-air driving with style.",
    price: "$130/day",
    features: ["Soft Top", "Sport Mode", "Premium Audio"],
  },
  {
    type: "Electric Car",
    image: Car7,
    description: "Eco-friendly driving with cutting-edge technology.",
    price: "$110/day",
    features: ["Zero Emissions", "Touchscreen", "Fast Charging"],
  },
];

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
    numScroll: 1,
  },
];

const VehicleScroll = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const productTemplate = (vehicle) => {
    return (
      <div
        className="px-2 cursor-pointer"
        onClick={() => setSelectedVehicle(vehicle)}
      >
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
          <div className="relative h-60 overflow-hidden flex items-center justify-center">
            <img
              src={vehicle.image}
              alt={vehicle.type}
              className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h2 className="text-xl font-bold text-white">{vehicle.type}</h2>
              <p className="text-blue-200 text-sm font-medium">
                {vehicle.price}
              </p>
            </div>
          </div>
          <div className="p-4 flex-grow flex flex-col">
            <p className="text-gray-600 text-sm mb-3 flex-grow">
              {vehicle.description.slice(0, 40)}...
            </p>
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {vehicle.features.map((feature, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <button className="mt-auto w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 text-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  const closeModal = () => {
    setSelectedVehicle(null);
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Our Vehicle Fleet
          </span>
        </h1>
        <Carousel
          value={vehicles}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>

      {selectedVehicle && (
  <div className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50 px-2">
    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-2xl relative flex flex-col">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
      >
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
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

      {/* Image */}
      <div className="flex items-center justify-center mb-4 sm:mb-6">
        <img
          src={selectedVehicle.image}
          alt={selectedVehicle.type}
          className="w-full max-h-[200px] sm:max-h-[300px] md:max-h-[300px] object-contain rounded-md"
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
          {selectedVehicle.type}
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mb-3">
          {selectedVehicle.description}
        </p>

        <p className="text-blue-600 font-medium text-base sm:text-lg mb-3">
          {selectedVehicle.price}
        </p>

        <div className="mb-5">
          <div className="flex flex-wrap gap-2">
            {selectedVehicle.features.map((feature, i) => (
              <span
                key={i}
                className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-xs sm:text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base mt-4"
        onClick={() => alert(`Booking ${selectedVehicle.type}!`)} // Replace with real booking logic
      >
        Book Now
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default VehicleScroll;

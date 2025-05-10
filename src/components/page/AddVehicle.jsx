import React, { useState } from 'react';

function AddVehicle() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    rate: '',
    type: '',
    seatingCapacity: '',
    ac: false,
    fuelType: '',
    luggageCapacity: '',
    description: '',
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your submit logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 animate-slide-in">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 ">
          Add New Vehicle
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Vehicle Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              placeholder="e.g., Toyota Innova"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              placeholder="e.g., https://example.com/images/innova.jpg"
              required
            />
          </div>

          {/* Rate */}
          <div>
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700">
              Rate (per hour)
            </label>
            <input
              type="number"
              id="rate"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              placeholder="e.g., 18"
              min="0"
              required
            />
          </div>

          {/* Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Vehicle Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              required
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Van">Van</option>
              <option value="Truck">Truck</option>
            </select>
          </div>

          {/* Seating Capacity */}
          <div>
            <label htmlFor="seatingCapacity" className="block text-sm font-medium text-gray-700">
              Seating Capacity
            </label>
            <input
              type="number"
              id="seatingCapacity"
              name="seatingCapacity"
              value={formData.seatingCapacity}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              placeholder="e.g., 7"
              min="1"
              required
            />
          </div>

          {/* AC */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="ac"
              name="ac"
              checked={formData.ac}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="ac" className="ml-2 text-sm font-medium text-gray-700">
              Air Conditioning (AC)
            </label>
          </div>

          {/* Fuel Type */}
          <div>
            <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700">
              Fuel Type
            </label>
            <select
              id="fuelType"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              required
            >
              <option value="" disabled>
                Select Fuel Type
              </option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Luggage Capacity */}
          <div>
            <label htmlFor="luggageCapacity" className="block text-sm font-medium text-gray-700">
              Luggage Capacity (bags)
            </label>
            <input
              type="number"
              id="luggageCapacity"
              name="luggageCapacity"
              value={formData.luggageCapacity}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              placeholder="e.g., 4"
              min="0"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              placeholder="e.g., Spacious and comfortable ride ideal for family travel."
              required
            ></textarea>
          </div>

          {/* Available */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="available"
              name="available"
              checked={formData.available}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="available" className="ml-2 text-sm font-medium text-gray-700">
              Available
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddVehicle;
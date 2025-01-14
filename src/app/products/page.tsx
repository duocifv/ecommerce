import React from 'react';

const Page = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full sm:w-1/2 rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <img
              src="https://picsum.photos/1500"
              alt="Product Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2 pl-4 text-center">
            <h2 className="text-xl font-semibold">Trendy Woody Door with handle lock</h2>
            <p className="text-sm text-green-600 mt-2">
              Availability: <span className="font-semibold">In Stock</span>
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold">Choose Color</p>
              <div className="flex justify-center space-x-2 mt-2">
                <button className="w-6 h-6 rounded-full bg-red-200"></button>
                <button className="w-6 h-6 rounded-full bg-black"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500"></button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold">Quantity</p>
              <div className="flex items-center space-x-2 mt-2">
                <button className="text-xl text-gray-500">-</button>
                <input
                  type="number"
                  value="1"
                  className="w-12 text-center border p-2 rounded-md"
                />
                <button className="text-xl text-gray-500">+</button>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
            <div className="mt-2 text-center">
              <a href="#" className="text-sm text-blue-600">
                View Full Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

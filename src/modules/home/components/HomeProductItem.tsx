'use client'
import Image from 'next/image'
import { useState } from 'react'

const HomeProductItem = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const handleColorChange = (color) => setSelectedColor(color)
  const handleSizeChange = (size) => setSelectedSize(size)
  const handleQuantityChange = (e) => setQuantity(Number(e.target.value))
  if (!product) return 'Không có sản phẩm'
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap -mx-4">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
          {selectedColor?.imageUrl && (
            <Image
              width={500}
              height={500}
              src={selectedColor?.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold text-gray-800">
              ${selectedColor?.price}
            </span>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Color</h3>
            <div className="flex space-x-4 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorChange(color)}
                  className={`w-10 h-10 rounded-full border-2 ${selectedColor.name === color.name ? 'border-blue-500' : 'border-gray-300'}`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Size</h3>
            <div className="flex space-x-4 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`px-4 py-2 border-2 rounded-md ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Quantity</h3>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 p-2 border-2 rounded-md text-center"
            />
          </div>

          {/* Add to Cart and Wishlist */}
          <div className="flex items-center space-x-4 mb-6">
            <button className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2 2 4-4m0 0l4 4 2-2m-8 4l2 2 4-4"
                />
              </svg>
            </button>
          </div>

          {/* Rating and Reviews */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Rating</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500">
                {/* Star Rating */}
                {'★'.repeat(4)}
                {'☆'.repeat(1)}
              </span>
              <span className="text-gray-600">4.0 / 5 (120 reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProductItem

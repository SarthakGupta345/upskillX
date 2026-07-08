import React from 'react'

const CartRightSide = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Price Details */}
      <div>
        <span className="text-sm font-bold text-gray-500 block">Total:</span>
        <span className="text-3xl font-bold text-gray-900">₹519.00</span>
        <div className="text-sm text-gray-500 line-through">₹1,239.00</div>
        <div className="text-sm text-gray-700">58% off</div>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-[#a435f0] hover:bg-purple-800 text-white font-bold py-3 px-4 flex items-center justify-center gap-2 rounded transition-colors duration-200">
        Proceed to Checkout
        <span className="text-lg">→</span>
      </button>
      
      <p className="text-xs text-gray-500 text-center">You won&apos; t be charged yet</p>

      <hr className="border-gray-200 my-2" />

      {/* Coupon Input Area */}
      <button className="w-full border border-[#a435f0] text-[#a435f0] hover:bg-purple-50 font-bold py-2 px-4 rounded text-sm transition-colors duration-200">
        Apply Coupon
      </button>
    </div>
  )
}

export default CartRightSide
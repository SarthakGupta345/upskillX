import React from 'react'

const CartCard = () => {
    return (
        <div className="flex flex-col md:flex-row items-start justify-between bg-white py-4 border-b border-gray-200 gap-4">
            {/* Left: Thumbnail & Details */}
            <div className="flex items-start gap-4 flex-1">
                <img
                    src="https://via.placeholder.com/120x68"
                    alt="Course Thumbnail"
                    className="w-28 h-16 object-cover border border-gray-200 rounded"
                />
                <div className="flex-1">
                    <h3 className="font-bold text-base leading-tight text-gray-900">
                        The Complete Claude Code & Claude Cowork Masterclass [2026]
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">By Prof. Ryan Ahmed, Ph.D., MBA</p>

                    {/* Badges & Ratings */}
                    <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs">
                        <span className="bg-[#ecebfa] text-[#2d2f31] font-bold px-2 py-0.5 rounded text-[11px]">
                            Bestseller
                        </span>
                        <span className="text-[#b4690e] font-bold">4.6</span>
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-gray-500">(4,866 ratings)</span>
                    </div>

                    <div className="text-xs text-gray-500 mt-2 space-x-2">
                        <span>22 total hours</span>
                        <span>•</span>
                        <span>158 lectures</span>
                        <span>•</span>
                        <span>All Levels</span>
                    </div>

                    <div className="mt-2">
                        <span className="bg-[#a435f0] text-white text-[11px] font-bold px-2 py-1 rounded inline-flex items-center gap-1">
                            ✓ Premium
                        </span>
                    </div>
                </div>
            </div>

            {/* Center/Right: Action Links */}
            <div className="flex flex-col text-right text-sm text-[#a435f0] space-y-1 min-w-[100px]">
                <button className="hover:text-purple-900 text-left md:text-right">Remove</button>
                <button className="hover:text-purple-900 text-left md:text-right">Move to Wishlist</button>
            </div>

            {/* Right: Pricing Tag */}
            <div className="text-right min-w-[80px]">
                <div className="text-[#a435f0] font-bold text-lg flex items-center justify-end gap-1">
                    ₹519.00
                    <span className="text-xs">🏷️</span>
                </div>
                <div className="text-gray-400 line-through text-sm">₹1,239.00</div>
            </div>
        </div>
    )
}

export default CartCard
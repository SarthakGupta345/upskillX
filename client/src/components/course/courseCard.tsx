import React from 'react'

const Coursecard = ({
    image = "https://via.placeholder.com/260x145", // Replace with your Python asset image path
    title = "The Complete Python Bootcamp From Zero to Hero in Python",
    description = "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    instructor = "Jose Portilla, Pierian Training",
    rating = 4.6,
    reviewCount = "563,274",
    duration = "22.5 total hours",
    lectures = "170 lectures",
    level = "All Levels",
    price = "₹529.00",
    oldPrice = "₹3,199.00"
}) => {
    return (
        <div className="flex flex-col md:flex-row gap-5 py-4 border-b border-gray-200 w-full group cursor-pointer bg-white">

            {/* Left: Thumbnail Section */}
            <div className="w-full md:w-[260px] h-[145px] flex-shrink-0 border border-gray-200 overflow-hidden relative bg-gray-50 flex items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-102"
                />
            </div>

            {/* Right: Content Details Section */}
            <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                    {/* Title and Options Menu */}
                    <div className="flex justify-between items-start gap-4">
                        <h3 className="font-bold text-gray-900 text-[17px] leading-tight flex-1 tracking-tight group-hover:text-[#a435f0]">
                            {title}
                        </h3>
                        {/* Options Button (Three Vertical Dots) */}
                        <button className="text-gray-700 hover:text-black font-bold text-lg px-1 transition-colors focus:outline-none self-start">
                            ⋮
                        </button>
                    </div>

                    {/* Description Snippet */}
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed line-clamp-2">
                        {description}
                    </p>

                    {/* Instructor Name */}
                    <p className="text-gray-500 text-[11px] mt-1">
                        {instructor}
                    </p>

                    {/* Ratings Row */}
                    <div className="flex items-center gap-1.5 mt-1 text-xs">
                        <span className="text-[#b4690e] font-bold text-[13px]">{rating.toFixed(1)}</span>
                        <div className="flex text-amber-500 text-xs tracking-tighter">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-amber-400">★</span>
                        </div>
                        <span className="text-gray-500 text-[11px]">({reviewCount})</span>
                    </div>

                    {/* Meta Info (Hours, Lectures, Level) */}
                    <div className="text-gray-500 text-[11px] mt-1.5 flex flex-wrap items-center gap-1">
                        <span>{duration}</span>
                        <span className="text-gray-300 text-[8px] mx-0.5">•</span>
                        <span>{lectures}</span>
                        <span className="text-gray-300 text-[8px] mx-0.5">•</span>
                        <span>{level}</span>
                    </div>
                </div>

                {/* Pricing & Premium Badge Row */}
                <div className="mt-2.5 space-y-2">
                    <div className="flex items-baseline gap-2">
                        <span className="text-gray-900 font-bold text-base tracking-tight">{price}</span>
                        <span className="text-gray-400 line-through text-xs">{oldPrice}</span>
                    </div>

                    <div>
                        <span className="bg-[#a435f0] text-white text-[10px] font-bold px-2 py-1 rounded inline-flex items-center gap-1 uppercase tracking-wider shadow-sm">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            Premium
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coursecard
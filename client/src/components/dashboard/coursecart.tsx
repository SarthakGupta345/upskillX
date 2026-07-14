import React from 'react'

const DiscoverCard = ({ course }) => {
  const { 
    title, 
    instructor, 
    rating, 
    reviews, 
    price, 
    oldPrice, 
    isFree, 
    thumbnail 
  } = course

  return (
    <div className="flex flex-col min-w-[210px] w-full bg-white rounded-xl overflow-hidden group cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      
      {/* Course Thumbnail Image */}
      <div className="w-full aspect-video bg-gray-100 overflow-hidden border-b border-gray-100">
        <img 
          src={thumbnail || "https://via.placeholder.com/240x135"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-102"
        />
      </div>

      {/* Meta Content Metadata Container */}
      <div className="p-3.5 flex flex-col flex-1 justify-between">
        <div>
          {/* Title with lines clamp limitation */}
          <h3 className="font-bold text-gray-900 text-[14px] leading-snug tracking-tight line-clamp-2 min-h-[40px] group-hover:text-[#a435f0] transition-colors">
            {title}
          </h3>
          
          {/* Instructor context */}
          <p className="text-gray-400 text-[11px] truncate mt-1">
            {instructor}
          </p>

          {/* Ratings indicators row */}
          <div className="flex items-center gap-1 mt-1 text-xs">
            <span className="text-[#b4690e] font-bold text-[12px]">{rating.toFixed(1)}</span>
            <div className="flex text-amber-500 text-[10px] tracking-tighter">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="text-gray-400 text-[10px]">({reviews.toLocaleString()})</span>
          </div>
        </div>

        {/* Pricing Actions Context Row Container */}
        <div className="mt-3 space-y-2">
          <div className="flex items-baseline gap-1.5">
            {isFree ? (
              <span className="text-emerald-600 font-extrabold text-sm uppercase tracking-wider">Free</span>
            ) : (
              <>
                <span className="text-gray-900 font-extrabold text-[15px]">₹{price}</span>
                <span className="text-gray-400 line-through text-[11px]">₹{oldPrice}</span>
              </>
            )}
          </div>

          {/* Badges strip based on explicit criteria ruleset */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <span className="bg-[#a435f0] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
              Premium
            </span>
            
            {/* Conditional validation checking payment criteria flags */}
            {!isFree && (
              <span className="bg-blue-50 text-blue-700 text-[9px] font-bold px-1.5 py-0.5 rounded border border-blue-100 uppercase tracking-wider">
                Paid
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DiscoverCard
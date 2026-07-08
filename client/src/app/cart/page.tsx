import CartLeftSide from '@/components/cart/leftSidebar'
import CartRightSide from '@/components/cart/rightSidebar'
import React from 'react'

const CartPage = () => {
    return (
        <div className="mx-auto bg-white  w-full h-screen py-5   p-6 font-sans text-gray-800">
            <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
            <p className="text-sm font-semibold mb-4">1 Course in Cart</p>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                    <CartLeftSide />
                </div>
                <div className="lg:col-span-1">
                    <CartRightSide />
                </div>
            </div>
        </div>
    )
}

export default CartPage
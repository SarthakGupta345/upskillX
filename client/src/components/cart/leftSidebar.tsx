import React from 'react'
import CartCard from './cartCard'

const CartLeftSide = () => {
    return (
        <div className="border-t border-gray-200 pt-4 px-10">
            {/* You can map over an array of items here in the future */}
            <CartCard />
            <CartCard />
        </div>
    )
}

export default CartLeftSide
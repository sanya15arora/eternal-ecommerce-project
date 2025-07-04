import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../redux/features/cart/cartSlice';

const OrderSummary = () => {
    const products = useSelector((state) => state.cart.products)
    const dispatch = useDispatch();
    const { selectedItems, totalPrice, tax, taxRate, grandTotal } = useSelector((state) => state.cart)

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className='bg-primary-light mt-5 rounded text-base'>
            <div className='px-6 py-4 space-y-5'>
                <h2 className='text-xl text-text-dark'>
                    Order Summary
                </h2>
                <p className='text-text-dark mt-2'> Selected Items : {selectedItems}</p>
                <p className='text-text-dark mt-2'> Total Price : ${totalPrice.toFixed(2)}</p>
                <p className='text-text-dark mt-2'> Tax ({taxRate * 100}%): ${tax.toFixed(2)}</p>
                <h3 className='font-bold'> Grand Total : ${grandTotal.toFixed(2)}</h3>
                <div className='flex justify-between items-center mb-4'>
                    <button className='bg-red-500 text-white px-3 py-1.5 mt-2 mb-4 
                    rounded-md flex justify-between items-center hover:bg-primary-dark'
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClearCart();
                        }}>
                        <span className='mr-2'> Clear Cart</span>
                        <i className="ri-delete-bin-5-line"></i>
                    </button>
                    <button className='bg-green-600 text-white px-3 py-1.5 mt-2 mb-4 
                    rounded-md flex justify-between items-center hover:bg-primary-dark'>
                        <span className='mr-2'>Proceed to Checkout</span>
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>

            </div>
        </div >
    )
}

export default OrderSummary
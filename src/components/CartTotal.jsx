// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const{currency,delivery_fee,getCartAmount} = useContext(ShopContext);
    
    const [selectedSize, setSelectedSize] = useState('0.5kg');

    const sizePrices = {
        ['0.5kg']: 10,
        ['1kg']: 15,
        ['1.5kg']: 20,
        ['2kg']: 25,
      };

  return (

    
    <div className='w-full '>
        <div className='text-2xl '>
            <Title text1={'CART'} text2={'TOTAL'}/>
            
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>  
                <p>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping</p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Kilogam</p>
                <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)} // Cập nhật size khi thay đổi
                >
                {Object.keys(sizePrices).map((size) => (
                    <option key={size} value={size}>
                    {size} ({currency}{sizePrices[size]}.00)
                    </option>
                ))}
                </select>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency}{getCartAmount()=== 0 ? 0 :getCartAmount()+delivery_fee+(sizePrices[selectedSize] || 0)}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal
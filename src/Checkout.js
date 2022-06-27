import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg" alt=""/>
            <div>
                <h2 className='checkout__title'>
                    Your shopping Basket
                </h2>
                
              {/* basket item  */}
              {/* basket item  */}
              {/* basket item  */}
              {/* basket item  */}
              {/* basket item  */}
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout
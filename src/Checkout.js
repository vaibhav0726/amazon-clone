import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg" alt=""/>
            <div>
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2>
                

              {/* basket items  */}
              {/* checkout products  */}
              {basket.map(item =>(
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
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
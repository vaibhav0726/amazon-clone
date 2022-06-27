import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [{ basket, user }, dispatch, getBasketTotal] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{getBasketTotal}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}  
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

        <button>
            Proceed to checkout
        </button>

    </div>
  )
}

export default Subtotal
import { useState } from 'react';
import Product from "./styles/quatityPicker.css";

function QuantityPicker() {
    const [quantity, setQuantity]  = useState(1);

    function increase() {
        const val = quantity + 1;
        setQuantity(val);  
        props.onChange(val); // notify listener parent
    }

    function decrease() {
        if(quantity == 1) return

        const val = quantity - 1;
        setQuantity(val)
    }


    return (
        <div className="qt-picker">
            <button className='btn btn-sm btn-outline-success' onClick={decrease} disabled={quantity == 1}>-</button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-outline-success' onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
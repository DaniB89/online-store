import { useContext, useState } from 'react';
import QuantityPicker from './quantityPicker';
import './styles/product.css';
import DataContext from '../state/dataContext';

function Product(props){ 
    const [quantity, setQuantity] = useState(1);

    const globalAddToCart = useContext(DataContext).addToCart


    function add(){
        //an object that contains prduct info + quantity ie. prodNDQuatity
        let prodNdQuantity = {...props.data, quantity:quantity};

        globalAddToCart(prodNdQuantity);
    }

    function handleQuantity(qty){
        setQuantity(qty);
    }
function getTotal(){
    let total = props.data.price * quantity;
    // ton of logic
    return total.toFixed(2);
}

    return(
        <div className="product">
            <img src={"./img/"+props.data.image} alt="" />
            //* <img src="https://picsum.photos/seed/picsum/200/300" alt="" /> */
            
            <h3>{props.data.title}</h3>

            <div className="product-price">
                <label className='total'>${getTotal()}</label>
                <label className='price'>${(props.data.price).toFixed(2)}</label>
            </div>

            <Quantity_Picker> onChange={handleQuantity}</Quantity_Picker>

            <button className='btn btn-sm btn-success' onClick={add}>Add</button>
            {/* title */}
            {/* image */}
            {/* price */}
            {/* category */}
            {/* _id */}
        </div>
    );
}

export default Product;

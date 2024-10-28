import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(props){ 

    function add(){
        console.log("adding to cart");
    }

    function handleQuantity(qty){
        console.log ("quantity changed", qty);
        setQuantity(qty);
    }
function getTotal(){
    let total = props.data.price * quantity;
    // ton of logic
    return total.toFixed(2);
}

    return(
        <div className="product">
            <img src={"./img/"+props.image} alt="" />
            //* <img src="https://picsum.photos/seed/picsum/200/300" alt="" /> */
            
            <h3>{props.data.title}</h3>

            <div className="product-price">
            <label className='total'>${getTotal()}</label>
            <label className='price'>${(props.data.price).toFixed(2)}</label>

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

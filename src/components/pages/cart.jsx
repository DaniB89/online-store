import { useContext} from 'react';
import "./styles/cart.css";
import DataContext from '../state/dataContext';



function Cart() {
    const globalCart = useContext(DataContext).cart;

    return (
        <div className="cart page">
            <h1>Ready to complete you order?</h1>
            <h5>We have {globalCart.length} products ready for you!</h5>

            <div className="list">
                {globalCart.map(prod => 
                    <div className='cart-product'>
                        <img src={prod.image} alt=""></img>
                        <h4>{prod.title}</h4>
                        <label>${prod.price}</label>
                        <label>#{prod.quantity}</label>
                        <label>${prod.price * prod.quantity}</h4>
                        <button className='btn btn-sm btn-outline-danger'>Remove</button>
                    </div>

                    <div className="side-menu">
                        <h4>Total</h4>
                        <h2>$9,999.91</h2>

                        <button className='btn btn-outline-danger'>Clear Cart</button>
                )}
            </div>
        </div>
    );
}

export default Cart;
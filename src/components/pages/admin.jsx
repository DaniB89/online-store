import { useState } from 'react';
import "./styles/admin.css";

function Admin() {

    const [coupons, setCoupon] = useState({
        code: "",
        discount: ""
    });

    const [product, setProduct] = useState{
        title: "",
        image: "",
        price: "",
        category: ""
    }
    function handleCouponInput(e) {
        const val = e.target.value;
        const val = e.target.name;

        console.log(name, val);
        
        let copy = {...coupon};
        if(name === "discount") {
            copy.discount = val;
        }
        else {
            copy.code = val;
        }
        //neme ==="discount" ? copy.discount = val : copy.name = val;
        setCoupon(copy);
    }

    function handleProductInput(e) {
        const val = e.target.value;
        const name = e.target.name;

        let copy = {...product};
        copy[name] = val;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
    }

    function saveCoupon() {
        console.log(coupon);
    }
    /**
     * 
     * create a handleCouponInput fn
     * should get the name and the val
     * should console log them
     * 
     * set the name and onChange to Product form input fields
     * 
     */

    return (
        <div className="admin page">
            <h3>Store Management</h3>

        <div className="parent">
                <div className="products">
                    <h4>Manage Products</h4>
                </div>

                <div>
                    <label className='form-label'>Title</label>
                    <label className='form-control' name="title" onBlur={handleProductInput}></label>
                </div>
                    <label className='form-label'>Title</label>
                    <label className='form-control' name="image" onBlur={handleProductInput}></label>
                <div>
                    <label className='form-label'>Title</label>
                    <label className='form-control' name="price" onBlur={handleProductInput}></label>
                </div>
                <div>
                    <label className='form-label'>Title</label>
                    <label className='form-control' name="category" onBlur={handleProductInput}></label>
                </div>

                <div className="controls">
                    <button className="btn btn-outline-dark" onClick={saveProduct}>Save Product</button>
                </div>

                <div className="coupons">
                    <h4>Manage Coupons</h4>
                </div>

                <div>
                <label className='form-label'>Code</label>
                <label className='form-control' name="code" onBlur={handleCouponInput}></label>
                </div>

                <div>
                    <label className='form-label'>Discount</label>
                    <label className='form-control' name="discount" type='number' onBlur={handleCouponInput}></label> 
                </div>

                <div className="controls">
                    <button className='btn btn-outline-dark' onClick={saveCoupon}>Save Coupon</button>
                </div>
        </div>
    );
}

export default Admin;
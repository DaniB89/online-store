import './styles/catalog.css';
import Product from './components/product.jsx';
import DataService from './services/dataServices.js'
import { useState, useEffect } from 'react';

function Catalog () {

    const[products, setProducts] = useState([]);
    const[categories, setCategories] = useState([]);
    useEffect(function(){
        loadCatalog();
        loadCategories();
    },[]);

    function loadCatalog(){
            let service = new DataService();
            let prods = service.getProducts();
            setProducts(prods);
    }

    function loadCategories(){
        letService = new DataService();
        let cats = service.getCatagories();
        setCategories(cats);
    }

    return(
        <div className="catalog">
            <h3>We have {products.length} new products for you!</h3>
            
            <div className='filters'>
                {categories.map( cat => <button className='btn btn-sm btn-outline-success'>{cat}t</button> )}
            </div>

            <div className='catalog-items'>
                {
                    products.map((item)=>(
                        <Product key={item._id} data={item}></Product>
                    ))
                }
            </div>
        </div>
    );
}

export default Catalog
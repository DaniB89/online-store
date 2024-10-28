import {useContext} from 'react'
import './styles/navbar.css';

import { Link } from 'react-router-dom';
import DataContext from '../state/dataContext';

function Navbar() {

const user = useContext(DataContext).user

    return(
        <div>
            <nav class="navbar border-bottom">
                <div className="menu">
                    <a href=' '>Login</a>
                    <a href=' '>Search</a>
                    <a href=' '>Subscribe</a>
                    <a href=' '>Menu</a>
                </div>
            </nav>
        </div>
        <div class="d-flex" role="search">
            <div className='btn btn-outline-light me-3'>
                {user.name}
            </div>

            <Link className='btn btn-outline-light' to="/cart">View Cart</Link>
        </div>
    );
}

export default Navbar;

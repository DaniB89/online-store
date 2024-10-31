import {useContext} from 'react'
import './styles/navbar.css';

import { Link } from 'react-router-dom';
import DataContext from '../state/dataContext';

function Navbar() {

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    return (
        <nav class="navbar border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Online-Store</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContext">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContext">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <link class="nav-link active" aria-current="page" to="/home">Home</link>
                        </li>

                        <li class="nav-item">
                            <link class="nav-link active" aria-current="page" to="/catalog">Catalog</link>
                        </li>

                        <li class="nav-item">
                            <link class="nav-link active" aria-current="page" to="/aboutus">About Us</link>
                        </li>

                        <li class="nav-item">
                            <link class="nav-link active" aria-current="page" to="/admin">Admin</link>
                        </li>
                    </ul>
                    <div class="d-flex" role="search">
                        <div className='btn btn-outline-light me-3'>
                            {user.name}
                        </div>

                        <Link className='btn btn-outline-light' to="/cart">
                        <span className='badge text-bg-success me-2'>{cart.length}  </span>
                        View Cart</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

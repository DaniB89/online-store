import "./styles/home.css";

import backImg from "../assets/top-banner.jpg"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home page">

            {/*opt 1, with image in public folder */}
            <img src='/images/wrap2.jpg' alt="" />

            <div className="home-text">
                <h1>Online Store</h1>
                <h3> Organic Food 1 Click Away!!</h3>

                <Link className='btn btn-success' to="/catalog">Check out our amazing catalog</Link>
            </div>


            {/* opt 2, with iage in src and imported*/}
            <img src={backImg} alt="" />
        </div>
    );
}

export default Home;
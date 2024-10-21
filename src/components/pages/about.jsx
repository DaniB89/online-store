import { useState } from 'react';
import "./styles/about.css";

function About() {
    const [visibleEmail, setVisibleEmail] = useState(false);

    function showEmail(){
        setVisibleEmail(true);
    }

    return (
        <div className="about">
            <h3>About Us</h3>

            <div className="box">
                <h2>Danielle Black</h2>
                { visibleEmail ? <h5>danielle.blk89@gmail.com</h5> : <label> Click the button to see my email</label> }
                <br />
                {
                    !visibleEmail
                    ? <button onClick={showEmail} classNames='btn btn-outline-primary'>Show Email</button>
                    : null
                }
            </div>
        </div>
    );
}

export default About;

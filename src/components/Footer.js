import React from "react";
import logo from  '../images/Logo .svg';
const Footer =()=>{
    return (
    <footer>
        <section>
            <div className="company-info">
                <img src={logo} alt=''/>
                <p>We are a family owned Mediteran resturant, Focused on Traditional Recipes served with a modern twist. </p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Phone: 123-456-7890</li>
                    <li>Email: info@restaurant.com</li>
                    <li>Address: 123 Main St, Chicago, IL</li>
                </ul>
            </div>
        </section>
    </footer>
    );
};
export default Footer;
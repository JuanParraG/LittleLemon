import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <img/>
            <div>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li>Menu</li>
                    <li><Link to="/Reservations">Reservations</Link></li>
                    <li>Order Online</li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                    <ul>
                        <li><a href="">Adress</a></li>
                        <li><a href="">Phone number</a></li>
                        <li><a href="">Email</a></li>
                    </ul>
            </div>
            <div>
                <h3>Social Media</h3>
                    <ul>
                        <li><a href="">facebook</a></li>
                    </ul>
            </div>
        </footer>
    )
}
export default Footer;
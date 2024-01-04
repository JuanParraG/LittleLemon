import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav>
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li>Menu</li>
                <li><Link to="/Reservations">Reservations</Link></li>
                <li>Order Online</li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;
import { Link } from "react-router-dom";
import {Heading, Image } from "@chakra-ui/react";
import logo from "../sources/icon.png"

function Footer(){
    return(
        <footer>
            <Image
                src={logo}
                alt="Yellow Lemon. Little lemon's logo."
                />
            <div className="Navigation">
                <Heading as="h3" size="sm">Doormat Navigation</Heading>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li>Menu</li>
                    <li><Link to="/Reservations">Reservations</Link></li>
                    <li>Order Online</li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </div>
            <div className="Contact">
                <Heading as="h3" size="sm">Contact</Heading>
                    <ul>
                        <li><a href="">Adress</a></li>
                        <li><a href="">Phone number</a></li>
                        <li><a href="">Email</a></li>
                    </ul>
            </div>
            <div className="SocialMedia">
                <Heading as="h3" size="sm">Social Media</Heading>
                    <ul>
                        <li><a href="">facebook</a></li>
                    </ul>
            </div>
        </footer>
    )
}
export default Footer;
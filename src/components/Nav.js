import { Link } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import { Menu, MenuButton, MenuItem, IconButton, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
function Nav(){
    const size= useScreenSize();
    console.log(size)
    return(
        <nav className="top">
           {size.width > 650 ? (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li>Menu</li>
                <li><Link to="/Reservations">Reservations</Link></li>
                <li>Order Online</li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        ) : (
            <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon/>}
                variant='outline'
                color="white"
            />
            <MenuList>
                <MenuItem>
                <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem>
                <Link to="/About">About</Link>
                </MenuItem>
                <MenuItem>
                Menu
                </MenuItem>
                <MenuItem>
                <Link to="/Reservations">Reservations</Link>
                </MenuItem>
                <MenuItem>
                <Link to="/Login">Login</Link>
                </MenuItem>
            </MenuList>
            </Menu>
        )
        }
        </nav>
    )
}
export default Nav;
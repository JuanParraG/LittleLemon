import { Center, Image } from "@chakra-ui/react";
import logo from "../sources/Logo.svg"

function Header(){
    return(
        <header>
            <Center>
                <Image
                src={logo}
                alt="Yellow Lemon. Little lemon's logo."
                mt="1rem"
                />
            </Center>

        </header>
    )
}
export default Header;
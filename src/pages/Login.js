import { Button, Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
import "./Login.css"
function About(){
    return(
        <>
            <Header/>
            <Nav/>
            <Main>
                    <Heading as="h2">Log In</Heading>
                <section className="LogIn">
                    <div>
                    <form>
                        <input type="text" value="Email or Phone number"></input>
                        <input type="password" value="Password"></input>
                        <Button
                        type="submit"
                        w="200px"
                        alignSelf="center"
                        colorScheme="yellow"
                        backgroundColor="#F4CE14"
                        color="#495E57"
                        >Log in</Button>
                    </form>
                    <a>Forgot password?</a>
                    <hr/>
                    <Button
                    href=""
                    w="200px"
                    alignSelf="center"
                    colorScheme="yellow"
                    backgroundColor="#F4CE14"
                    color="#495E57"
                    mt="10px"
                    >Create new account</Button>
                    </div>
                </section>
            </Main>
            <Footer/>
        </>
    )
}
export default About;
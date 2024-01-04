import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";

function About(){
    return(
        <>
            <Header/>
            <Nav/>
            <Main>
                <div>
                    <h2>Log In</h2>
                </div>
                <div>
                    <form>
                        <input type="text" value="Email or Phone number"></input>
                        <input type="password" value="Password"></input>
                        <button type="submit">Log in</button>
                    </form>
                    <a>Forgot password?</a>
                    <hr/>
                    <a type="button" href="">Create new account</a>
                </div>
            </Main>
        </>
    )
}
export default About;
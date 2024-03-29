import { Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
import restaurant from "../sources/restaurant.jpg"
import "./About.css"
function About(){
    return(
        <>
            <Header/>
            <Nav/>
            <Main>
                <div>
                    <Heading as="h2" size="xl">about us?</Heading>
                </div>
                <section className="About">

                        <p>
                        Little Lemon is a family-owned Mediterranean restaurant located in Chicago, Illinois.
                        The restaurant is owned by two Italian brothers, Mario and Adrian, who moved to the United
                        States to pursue their shared dream of owning a restaurant. The restaurant’s menu features
                        a variety of classic Italian dishes, as well as additional cuisines from the Mediterranean region.
                        </p>
                        <br/>
                        <p>
                        Some of the popular dishes include Greek Salad made with crispy lettuce, peppers, olives,
                        and Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons; Bruschetta
                        made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil;
                        and Lemon Dessert which comes straight from grandma’s recipe book, every last ingredient has been
                        sourced and is as authentic as can be imagined. The restaurant also serves Lemonade, a refreshing
                        beverage made from lemon juice, water, and sugar, which is a good source of vitamin C.
                        </p>
                        <img src={restaurant}
                        alt="restaurant with beautiful views of nature and comfortable chairs"
                        width="2000px"
                        />

                </section>
            </Main>
            <Footer/>
        </>
    )
}
export default About;
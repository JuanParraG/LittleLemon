import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";

import restauranfood from "../sources/restauranfood.jpg";
import restauranChef from "../sources/restaurant chef B.jpg";
import restauran from "../sources/restaurant.jpg";
import CardMenu from "../components/CardMenu";
import CardRaiting from "../components/CardRaiting";
import { Button, Heading } from "@chakra-ui/react";
import "./Home.css"

function Home() {
    return (
      <>
      <Header/>
      <Nav/>
      <Main>
      <section className="Init" >
                <div className="text">
                    <Heading as="h1" size="2xl">Little Lemon</Heading>
                    <Heading as="h2" size="md">Chicago</Heading>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <br/>
                    <Button
                    colorScheme="yellow"
                    backgroundColor="#F4CE14"
                    color="#495E57"
                    mb="1rem">
                    <a href="/Reservations" role="button">Reserve a Table</a>
                    </Button>
                </div>
                <div className="img">
                    <img src={restauranfood}
                    alt="Four French breads stuffed with cheese, steak, tomato, avocado and spices. carried on a black board"
                  />
                </div>
            </section>

            <section className="Specials">
                    <Heading as="h2" size="xl" id="titleSpecials">Specials</Heading>
                    <Button
                    colorScheme="yellow"
                    backgroundColor="#F4CE14"
                    color="#495E57"
                    id="buttonMenu">
                    <a href="/" role="button">online Menu</a>
                    </Button>
                <div className="CardsMenu">
                    <CardMenu id="1"/>
                    <CardMenu id="2"/>
                    <CardMenu id="3"/>
                </div>
            </section>

            <section className="Testimonial">
                <Heading as="h2" size="xl" id="titleTestimonial">Testimonial</Heading>
                <div>
                    <CardRaiting/>
                    <CardRaiting/>
                    <CardRaiting/>
                    <CardRaiting/>
                </div>
            </section>

            <section className="Advertising">
                <div className="text">
                    <Heading as="h2" size="xl" id="titleTestimonial">Little Lemon</Heading>
                    <Heading as="h3" size="md">Chicago</Heading>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit.
                    </p>
                </div>
                    <img src={restauranChef}
                    alt="chef serving a plate of food"
                    width={300}
                    id="imgRestauranChef"
                    />
                    <img src={restauran}
                    alt="restaurant with beautiful views of nature and comfortable chairs"
                    width={300}
                    id="imgRestauran"
                    />
            </section>
      </Main>
      <Footer/>
      </>
    );
  }
  export default Home;
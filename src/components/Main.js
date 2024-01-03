import restauranfood from "../sources/restauranfood.jpg";
import restauranChef from "../sources/restaurant chef B.jpg";
import restauran from "../sources/restaurant.jpg";
import Card from "./Card";
import CardRaiting from "./CardRaiting";

function Main(){
    return(
        <main>
            <section section="Init">
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="/Reservations" role="button">Reserve a Table</a>
                </div>
                <div>
                    <img src={restauranfood}
                    alt="Four French breads stuffed with cheese, steak, tomato, avocado and spices. carried on a black board"
                    width={300}/>
                </div>
            </section>

            <section section="Specials">
                <div>
                    <h2>Specials</h2>
                    <a href="/Menu" role="button">online Menu</a>
                </div>
                <div>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>

            <section section="Testimonial">
                <h2>Testimonial</h2>
                <div>
                    <CardRaiting/>
                    <CardRaiting/>
                    <CardRaiting/>
                    <CardRaiting/>
                </div>
            </section>

            <section section="Advertising">
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit.
                    </p>
                </div>
                <div>
                    <img src={restauranChef}
                    alt="chef serving a plate of food"
                    width={300}/>
                    <img src={restauran}
                    alt="restaurant with beautiful views of nature and comfortable chairs"
                    width={300}/>
                </div>
            </section>
        </main>
    )
}
export default Main;
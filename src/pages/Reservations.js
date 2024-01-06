import { Button, Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
import "./Reservation.css"

function Reservations(){
    return(
        <>
            <Header/>
            <Nav/>
            <Main>
                <div>
                    <Heading as="h2" size="xl">Reservate table</Heading>
                </div>
                <section className="Reservation">
                <form>
                <label for="res-date">Choose date</label>
                    <input type="date" id="res-date"/>
                    <label for="res-time">Choose time</label>
                    <select id="res-time ">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label for="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests"/>
                    <label for="occasion">Occasion</label>
                    <select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <Button
                    w="200px"
                    alignSelf="center"
                    colorScheme="yellow"
                    backgroundColor="#F4CE14"
                    color="#495E57"
                    type="submit"
                    >
                    Make Your reservation
                    </Button>
                </form>
                </section>
            </Main>
            <Footer/>
        </>
    )
}
export default Reservations;
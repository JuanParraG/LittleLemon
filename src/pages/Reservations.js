import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";


function Reservations(){
    return(
        <>
            <Header/>
            <Nav/>
            <Main>
                <div>
                    <h2>Reservate table</h2>
                </div>
                <section>
                    <form>
                        <div>
                            <label for="day">Day: </label>
                            <input type="date" id="day" name="day"/>
                            <label for="hour">Hour: </label>
                            <input type="time" id="hour" name="time" min="9:00" max="22:00"/>
                        </div>
                        <div>
                            <label>N° of people: </label>
                            <label for="2">2</label>
                            <input type="checkbox" id="2"></input>
                            <label for="4">4</label>
                            <input type="checkbox" id="4"></input>
                            <label for="6">6</label>
                            <input type="checkbox" id="6"></input>
                            <label for="other">other: </label>
                            <input type="number" id="other" min={1} max={30}></input>
                        </div>
                        <div>
                            <label>table: </label>
                            <div>
                                <input type="checkbox" ></input>
                                <input type="checkbox" ></input>
                                <input type="checkbox" ></input>
                            </div>
                            <div>
                                <input type="checkbox" ></input>
                                <input type="checkbox" ></input>
                                <input type="checkbox" ></input>
                            </div>
                            <div>
                                <input type="checkbox" ></input>
                                <input type="checkbox" ></input>
                                <input type="checkbox" ></input>
                            </div>
                        </div>
                        <div>
                            <label for="observations">Observations: </label>
                            <input type="text" id="observations"/>
                        </div>
                    </form>
                </section>
            </Main>
            <Footer/>
        </>
    )
}
export default Reservations;
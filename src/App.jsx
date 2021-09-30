import NavBar from "./components/NavBar/NavBar"
import "../src/App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch  } from "react-router-dom"; 
import Raquetas from "./components/Raquetas/Raquetas";
import Indumentaria from "./components/Indumentaria/Indumentaria";
import Cart from "./components/Cart/Cart";



const App = () => {

    return (
        <BrowserRouter>
            
            <NavBar />
            <h1 className="text-center p-5" data-aos="zoom-in" data-aos-duration="3000"><b> SOMOS SQUASH MARKET</b></h1>

            <Switch>
                <Route path="/" component={ItemListContainer} exact/>
                <Route path="/category/Raquetas" component={Raquetas} exact/>
                <Route path="/category/Indumentaria" component={Indumentaria} exact/>
                <Route path="/product/:id" component={ItemDetailContainer} exact/>
                <Route path="/Cart" component={Cart} exact/>
            </Switch>

            <Footer />
        </BrowserRouter>
    )
}
export default App;
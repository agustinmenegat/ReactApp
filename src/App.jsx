import "../src/App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch  } from "react-router-dom"; 
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import {CartProvider} from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

    return (
        <BrowserRouter>
            <CartProvider>
                <Header/>
                <Switch>
                    <Route path="/" component={ItemListContainer} exact/>
                    <Route path="/category/:id" component={ItemListContainer}/>
                    <Route path="/product/:id" component={ItemDetailContainer} exact/>
                    <Route path="/Cart" component={Cart} exact/>
                </Switch>

                <Footer />
            </CartProvider>
        </BrowserRouter>
    )
}
export default App;
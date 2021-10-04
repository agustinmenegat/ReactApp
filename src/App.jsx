import "../src/App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch  } from "react-router-dom"; 
import Raquetas from "./components/Raquetas/Raquetas";
import Indumentaria from "./components/Indumentaria/Indumentaria";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import CartContext from "./Context/CartContext";
import { useState } from "react";


const App = () => {

    const [cart,setCart] = useState([]);


    return (
        <BrowserRouter>
            <CartContext.Provider value={{cart,setCart}}>
                <Header/>
                <Switch>
                    <Route path="/" component={ItemListContainer} exact/>
                    <Route path="/category/Raquetas" component={Raquetas} exact/>
                    <Route path="/category/Indumentaria" component={Indumentaria} exact/>
                    <Route path="/product/:id" component={ItemDetailContainer} exact/>
                    <Route path="/Cart" component={Cart} exact/>
                </Switch>

                <Footer />
            </CartContext.Provider>
        </BrowserRouter>
    )
}
export default App;
import "../src/App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch  } from "react-router-dom"; 
import Raquetas from "./components/Raquetas/Raquetas";
import Indumentaria from "./components/Indumentaria/Indumentaria";
import Cart from "./components/Cart/Cart";
/* import Context from "./Context/Context"; */
import Header from "./components/Header/Header";
import Context from "./Context/Context";
import { useState } from "react";

const App = () => {

    const [cart,setCart] = useState([]);

    return (
        <Context.Provider value={{cart,setCart}}>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" component={ItemListContainer} exact/>
                    <Route path="/category/Raquetas" component={Raquetas} exact/>
                    <Route path="/category/Indumentaria" component={Indumentaria} exact/>
                    <Route path="/product/:id" component={ItemDetailContainer} exact/>
                    <Route path="/Cart" component={Cart} exact/>
                </Switch>

                <Footer />
            </BrowserRouter>
        </Context.Provider>
    )
}
export default App;
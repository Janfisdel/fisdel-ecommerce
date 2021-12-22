import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartContextProvider from './context/CartContext';
import './App.css';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
        <div className="App">
            <NavBar/>
            <Routes>
              <Route
                exact 
                path="/" 
                element={ <ItemListContainer greeting='Al aire! Bienvenidos a nuestra tienda '/>} 
              />
             <Route 
                exact
                path="/categoria/:idCategoria" 
                element={ <ItemListContainer greeting='Al aire! Bienvenidos a nuestra tienda '/>} 
              />
              <Route 
                exact
                path="/detalle/:idProd"
                element={<ItemDetailContainer />}
              />
              <Route 
                exact 
                path="/cart"
                element={<Cart />} />
            </Routes>
        </div>
    </BrowserRouter>
   </CartContextProvider>
  );
}

export default App;

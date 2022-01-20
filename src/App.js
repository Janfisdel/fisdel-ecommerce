import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import BuyerForm from './components/BuyerForm/BuyerForm'
import CartContextProvider from './context/CartContext'
import './App.css'


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
        <div className='app'>
            <NavBar/>
            <Routes>
              <Route
                exact 
                path="/" 
                element={ <ItemListContainer greeting='Al aire! Bienvenidos a nuestra tienda '/>} 
              />
             <Route 
                exact
                path="/category/:idCategory" 
                element={ <ItemListContainer greeting='Al aire! Bienvenidos a nuestra tienda '/>} 
              />
              <Route 
                exact
                path="/detail/:idProd"
                element={<ItemDetailContainer />}
              />
              <Route 
                exact 
                path="/cart"
                element={<CartContainer />} 
              />
              <Route 
                exact
                path="/buyerForm"
                element={<BuyerForm/>}
                />

            </Routes>
        </div>
    </BrowserRouter>
   </CartContextProvider>
  );
}

export default App;

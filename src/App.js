
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
     
       <NavBar/>
       <ItemListContainer greeting='Al aire! Bienvenidos a nuestra tienda '/>
       <ItemDetailContainer />
       
     </div>

  );
}

export default App;

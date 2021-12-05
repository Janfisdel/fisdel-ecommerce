
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
     
       <NavBar/>
       <ItemListContainer greeting='Al aire! Bienvenidos a nuestra tienda '/>
       
     </div>

  );
}

export default App;

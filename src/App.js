import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {

  

  return (
    <div className="App">

        <NavBar/>

        <ItemListContainer greeting = "Tercer entrega" />
      
    </div>
  );
}

export default App;

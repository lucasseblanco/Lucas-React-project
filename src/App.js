import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner';




function App() {

  

  return (
    <div className="App">

        <NavBar/>


        <ItemDetailContainer/>
      
    </div>
  );
}

export default App;

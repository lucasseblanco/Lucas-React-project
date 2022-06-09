import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';





function App() {

  

  return (
    <BrowserRouter>
    <div className="App">

        <NavBar/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categorias/:categoryId' element={<ItemListContainer/>} />
        <Route path='/Item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={ <Navigate to={"/"} /> } />
      </Routes>

      <Footer/>

        
        
        
      
    </div>
    </BrowserRouter>
  );
}

export default App;

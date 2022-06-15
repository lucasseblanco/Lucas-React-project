import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Carrito from './components/Carrito/Carrito';
import { useState } from 'react';
import { CartProvider } from './components/Context/CartContext';
import { Item } from './components/Item/Item';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner';

function App() {
  
  return (

    <CartProvider>

    <BrowserRouter>
    <div className="App">

        <NavBar/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categorias/:categoryID' element={<ItemListContainer/>} />
        <Route path='/Item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={ <Navigate to={"/"} /> } />
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='Carrito/Carrito' element={<Carrito/>} />
      </Routes>

      <Footer/>
    </div>
    </BrowserRouter>
    
    </CartProvider>
  );
}

export default App;

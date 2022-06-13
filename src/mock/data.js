import { Image } from "react-bootstrap"


const productos = [
    {
      id: 1,
      nombre: 'Tabla Longboard 1',
      precio: 1200,
      descripcion: 'Descripcion tabla long 1',
      categoria: "Longboard",
      img: './Images/Producto_1.png',
      stock: 20
    },
    {
      id: 2,
      nombre: 'Tabla Longboard 2',
      precio: 12300,
      img: './Images/Producto_2.png',
      categoria: "Longboard",
      descripcion: 'Tabla long 2',
      stock: 20
    },
    {
      id: 3,
      nombre: 'Tabla Shortboard 1',
      precio: 3200,
      img: './Images/Producto_3.png',
      categoria: "Shortboard",
      descripcion: 'Tabla short 1',
      stock: 12
    },
    {
      id: 4,
      nombre: 'Deck',
      precio: 12400,
      img: './Images/Producto_4.png',
      descripcion: 'Descripcion deck',
      categoria: 'Accesorios',
      stock: 23
    }
  ]

  export default productos
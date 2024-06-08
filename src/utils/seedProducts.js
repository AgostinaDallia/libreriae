import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";


const products = [
    {
      id: "Axasd1231",
      name: "Lunchera",
      description: "Lunchera Futbol, un producto de la reconocida marca Cresko, es la elección perfecta para llevar la comida del día. Esta lunchera, con su color multicolor, no solo es funcional sino también atractiva. Cuenta con un amplio compartimiento principal, ideal para almacenar el almuerzo y los snacks",
      price: 23000,
      stock: 5,
      category: "Catucheras",
      image: "/image/lunchera.jpg"
    },
    {
      id: "Axasass112",
      name: "Marcadores",
      description: "Description 2",
      price: 210,
      stock: 1,
      category: "Colores",
      image: "/image/marcadores.jpg"
    },
    {
      id: "Gsx1232343",
      name: "Mochila Arcoiris",
      description: "Description 2",
      price: 250000,
      stock: 10,
      category: "Mochilas",
      image: "/image/mochilaArcoiris.jpg"
    },
    {
      id: "Sdsaw1q123",
      name: "Mochila Basquet",
      description: "Description 2",
      price: 190.000,
      stock: 10,
      category: "Mochilas",
      image: "/image/mochilaBasquet.jpg"
    },
    {
      id: "Axasd1231",
      name: "Cartuchera Selección",
      description: "Description 1",
      price: 15.000,
      stock: 25,
      category: "Cartucheras",
      image: "/image/cartucheraScaloneta.jpg"
    }
  ]
  
  const seedProducts = () => {
    products.map(({ id, ...rest }) =>{
      addDoc(collection(db, "products"), rest)
    });
    return
  }
  
  seedProducts()
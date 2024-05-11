const products = [
    {
      id: "Axasd1231",
      name: "Lunchera",
      description: "Description 1",
      price: 450,
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
  
  //obtener productos
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      //simulamos un retraso de red
      setTimeout(() => {
        resolve(products)
      }, 3000);
    });
  };
  
  export default getProducts
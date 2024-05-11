import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/itemDetailCount/ItemDetailCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer saludo="Tienda online Librería Estímulo" /> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer saludo="Tienda online Librería Estímulo" /> } />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

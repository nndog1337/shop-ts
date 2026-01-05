import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Card from "./components/Pages/Card";
import Men from "./components/Pages/Men";
import Women from "./components/Pages/Women";
import Jewelery from "./components/Pages/Jewelery";
import Electronics from "./components/Pages/Electronics";
import ContextProvider from "./components/Provider/Context";
import Cart from "./components/Pages/Cart";


function App() {

  return (
    <BrowserRouter>
    <ContextProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/card/:id" element={<Card/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/jewelery" element={<Jewelery/>} />
        <Route path="/electronics" element={<Electronics/>} />
      </Routes>
    </ContextProvider>
    </BrowserRouter>
  )
}

export default App

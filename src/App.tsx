import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Card from "./components/Pages/Card";
import Men from "./components/Pages/Men";
import Women from "./components/Pages/Women";
import Jewelery from "./components/Pages/Jewelery";
import Electronics from "./components/Pages/Electronics";


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/card/:id" element={<Card/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/jewelery" element={<Jewelery/>} />
        <Route path="/electronics" element={<Electronics/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

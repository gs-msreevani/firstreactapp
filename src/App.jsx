
import './App.css';
import React, { useState } from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import Contact from "./components/Pages/Contact.jsx";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login.jsx";
import Logout from "./components/Pages/Logout.jsx";
import NotFoundPage from "./components/Pages/NotFoundPage.jsx";
import Products from "./components/Pages/Products.jsx";
import SingleProduct from "./components/Pages/SingleProduct.jsx";
import Guide from "./components/Pages/Guide.jsx";
import Survey from "./components/Pages/Survey.jsx";
import Sellers from "./components/Pages/Sellers.jsx";
import Modal from "./components/Modaloverlay/Modal.jsx";
import NavigationButtons from './NavigationButtons.jsx';
import OrderPage from './OrderPage.jsx';

function App() {
   

    return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} exact/>
              <Route path="/welcome" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/sellers" element={<Sellers/>}/>
              <Route path="/guide" element={<Guide/>}/>
              <Route path="/survey" element={<Survey/>}/>
              <Route path="/products/:id" element={<SingleProduct/>}/>
              <Route path="/logout" element={<Logout/>}/>
              {/* If we want to navigate the route to homepage when invalid url is entered }*/}
              <Route path="*" element={<Navigate to="/" replace/>}/>
              {/*<Route path="*" element={<NotFoundPage />} />*/}
             
          </Routes>

          <div className="App">
           <NavigationButtons />
          </div>

      </>
  )
}

export default App

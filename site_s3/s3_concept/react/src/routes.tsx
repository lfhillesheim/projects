
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Landing from './Pages/Landing';


function Routes(){
    return ( 
    <BrowserRouter>
        <Navbar></Navbar>
        <Route path="/" exact component={ Landing } />
        
        <Footer></Footer>
    </BrowserRouter>
    
    );}

export default Routes;
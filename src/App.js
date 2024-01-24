import React,{useState} from "react";

import "./App.css"


// pages1 imports: 
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

import {Routes, Route} from "react-router-dom";


const App = () => {
   
  const [count, setCount] = useState(0);

    return (
        <div>
         
          <Navbar />
          

          <Routes>
            <Route path="/" element={<Home  name="Abhishek"/>}/>
            <Route path="/blog" element={<Blog  count={count} setCount={setCount}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact  count={count}/>}/>

          </Routes>


        </div>
    );
}

export default App;
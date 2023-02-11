import React, { useEffect } from "react";
import Home from "./Home Page/Home";
import AboutUS from "./About Us Page/About Us";
import { Route, Routes } from "react-router-dom";
import Dog from "./Dogs Page/Dog";
import Cat from "./Cat Page/Cat";
import Contact from "./Contact Page/Contact";

const App = () => {
  useEffect(() => {
    console.log("App montada");
    return () => {
      console.log("App desmontada");
    };
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUS />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </div>
  );
};

export default App;

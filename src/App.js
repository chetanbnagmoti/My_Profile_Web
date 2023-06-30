import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Conatct from "./Components/Conatct";
import Home from "./Components/Home";
import EducationMain from "./Components/EducationMain";
import ProjectMain from "./Components/ProjectMain";
import React from "react";

//App is commonet
function App() {
  return (
    <React.Fragment>
     


    <div className="conatainer-fluid bg-secondary ">
      <BrowserRouter>
        <Nav />
        <div className="conatiner mb-3">
      <Routes>
          <Route path="contact-us" element={<Conatct />} />
          <Route path="education" element={<EducationMain />} />
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<ProjectMain />} />
        </Routes>
      </div>

      </BrowserRouter>
      {/* <Footer /> */}
    </div>
    
    </React.Fragment>
  );
}

export default App;

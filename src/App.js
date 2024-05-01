import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import React from "react";


//App is commonet
function App() {
  return (
    <React.Fragment>
    <div className="conatainer-fluid" style={{backgroundColor:'black'}}>
      <BrowserRouter>
        <Nav />
        <div className="conatiner mb-3">
      <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>

      </BrowserRouter>
      {/* <Footer /> */}
    </div>
    
    </React.Fragment>
  );
}

export default App;

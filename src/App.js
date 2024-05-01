import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes,Navigate  } from "react-router-dom";
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
      <Route path="/My_Profile_Web/" element={<Home />} />
      {/* Define default route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
      </div>

      </BrowserRouter>
      {/* <Footer /> */}
    </div>
    
    </React.Fragment>
  );
}

export default App;

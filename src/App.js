import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Conatct from "./Components/Conatct";
import Home from "./Components/Home";
import EducationMain from "./Components/EducationMain";
import ProjectMain from "./Components/ProjectMain";

//App is commonet
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="contact-us" element={<Conatct />} />
          <Route path="education" element={<EducationMain />} />
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<ProjectMain />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;


import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SingUp from './Components/SignUp';
import PrivateComponet from './Components/PrivateComponet';
import Login from './Components/Login';






//App is commonet.
function App() {
  return  (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>

          <Route element={<PrivateComponet />}>
          <Route path='/' element={<ProductList />} ></Route>
          <Route path='/add' element={<AddProduct />} ></Route>
          <Route path='/update/:id' element={<UpdateProduct />} ></Route>
          {/* <Route path='/logout' element={<h1>Logout Components</h1>} ></Route> */}
          {/* <Route path='/profile' element={<h1>Profile Components</h1>} ></Route> */}
          </Route>  

          <Route path='/login' element={<Login />} ></Route>
          <Route path='/signUp' element={<SingUp />} ></Route>
        </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  )   
  
}

export default App;

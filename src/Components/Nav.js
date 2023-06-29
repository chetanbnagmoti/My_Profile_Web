import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  
  const logout = () => {
    localStorage.clear("user");
    navigate("/signUp");
  };
  return (
    <>
      <div>
        <img src="https://media.licdn.com/dms/image/D4D03AQEgFzYEkAAarw/profile-displayphoto-shrink_800_800/0/1670603910226?e=1692230400&v=beta&t=WHUGRgw2Em8dF1uEhluDZIV0yD3a7qEZ3p_4gxbx5vw" 
        className="logo" alt="logo" />
        {auth ? (
          <ul className="nav-ul">
            <li>
              
              <Link to="/">All Products</Link>
            </li>
            <li>
              <Link to="/add">Add Product</Link>
            </li>
            {/* <li>
              <Link to="/update">Update Product</Link>
            </li> */}

            {/* <li>
              <Link to="/profile">Profile </Link>
            </li> */}

         
          <li>
              <Link onClick={logout} to="/signUp">
                Logout ( {JSON.parse(auth).name})
              </Link>
            </li>
         
          
            {/* when Sing up then only see logout button  */}
            
          </ul>
        ) : (
          <ul className="nav-ul nav-right">
        
              <Link to="/signUp">Sing Up</Link>
              <li>
                <Link to="/login">Login</Link>
              </li>
            
          </ul>
        )}
      </div>
    </>
  );
}

export default Nav;

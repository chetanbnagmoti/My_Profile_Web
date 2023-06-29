import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{
    const[name,setpName]=useState("");
    const[price,setpPrice]=useState("");
    const[category,setpCategory]=useState("");
    const[company,setpCompany]=useState("");
    const[error,setError]=useState(false);

    const navigate=useNavigate();
    
    const addProduct=async ()=>{

        if(!name || !price || !category || !company){
               setError(true);
               return false;
        }

        console.log(name,price,category,company); 
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=  await result.json();
        console.log(result);
        if(result){
            navigate('/');
        }
    }
    
    return(
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" className="inputBox"  value={name}  onChange={(e)=>{setpName(e.target.value)}} placeholder="Enter Product Name" />
            {error && !name && <span className="invalid-input">Enter Valid Name</span>}
            <input type="text" className="inputBox" value={price}  onChange={(e)=>{setpPrice(e.target.value)}} placeholder="Enter Product Price" />
            {error && !price && <span className="invalid-input">Enter Price</span>}
            <input type="text" className="inputBox" value={category}  onChange={(e)=>{setpCategory(e.target.value)}} placeholder="Enter Product Category" />
            {error && !category && <span className="invalid-input">Enter Category</span>}
            <input type="text" className="inputBox" value={company}  onChange={(e)=>{setpCompany(e.target.value)}} placeholder="Enter Product Company" />
            {error && !company && <span className="invalid-input">Enter Comapny</span>}
            <button type="button" onClick={addProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct;
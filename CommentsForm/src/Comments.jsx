import React from 'react'
import { useState } from 'react';
import "./App.css";

const Comments = () => {
    let [FormData , setFormData] =useState({
        username : "",
        remarks : "",
        rating : 5

    })
    let InputHandler =(e)=>{
   let FormName = e.target.name;
   let FormValue = e.target.value;
   setFormData((curr)=>{
    return {...curr , [FormName]: FormValue};

   })
    
}

let onSubmitBtn=(e)=>{
    console.log(FormData);
    e.preventDefault();
    setFormData({
        username:"",
        remarks:"",
        rating:""   
    })
    alert(" I agree with all terms & conditions");

}


return (
    <>
   <div className="form"> <h1>Give Comment</h1>
    <br /><br />
   <form action="" onSubmit={onSubmitBtn}>
    <label htmlFor="username">username </label>
   <input type="text" placeholder='Enter your username' value={FormData.username} onChange={InputHandler} name='username' id='username'/>
    <br /><br />
    <label htmlFor="remarks ">remarks </label>
    <textarea name="remarks" id="remarks " placeholder='Enter your comment' value={FormData.remarks} onChange={InputHandler}></textarea >
    <br /><br />
    <label htmlFor="rating">rating</label>
    <input type="number" placeholder='rating' min={1} max={5} value={FormData.rating} onChange={InputHandler} name='rating'/>
    <br /><br />
    <button >Add Comment</button>

   </form></div>
    </>
  )
}

export default Comments
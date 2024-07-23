import React from 'react'
import { useState } from 'react'
import "./App.css";

const FormAd = () => {
    let [Form , setForm] = useState({
        FullName : "",
        UserName : "",
        password: ""
        
    });

    let HandleInput =(event)=>{
        let FieldName = event.target.name;
        let NewValueField = event.target.value;

// console.log(FieldName);
// console.log(NewValueField);

      setForm((currData)=>{
        return {...currData,[FieldName]:NewValueField };
      })

    };
    let handleSubmit=(event)=>{
        event.preventDefault();
        setForm({
            FullName : "",
            UserName : "",
            password : "",
        });
        console.log(Form);
        
    }
  return (
   <>
  <div className="formContainer">
  <form action="" onSubmit={handleSubmit}>
    <label htmlFor="FullName">Full Name </label>
    <input type="text" placeholder='Enter your name' id='FullName' name='FullName' value={Form.FullName} onChange={HandleInput}/>
    <br /><br />
    <label htmlFor="UserName">User Name </label>
    <input type="text" placeholder='Enter your user name' id='UserName' name='UserName' value={Form.UserName} onChange={HandleInput}/>
    <br /><br />
    <label htmlFor="password">password </label>
    <input type="password" placeholder='Enter your password' id='password' name='password' value={Form.password} onChange={HandleInput}/>
    <br /><br />
   
    <button>Submit</button>
   </form>
  </div>
   </>
  )
}

export default FormAd
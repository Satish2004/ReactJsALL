import React from 'react'
import { useState } from 'react'

const Form = () => {
    let[FullName , setFullName] = useState('hello');

    let handleOnChange =(event)=>{

        // console.log(event.target.value);
        setFullName(event.target.value);
    }
  return (
    <>
    <form action="">
        {/* always write htmlFor in place for for in JS and JSx because for is loop in js its already reserve  */}
        <label htmlFor="Username">Full Name </label>
        <input type="text" placeholder='Enter your full name' value={FullName} onChange={handleOnChange} id='username'/>
        <button>Submit</button>
        {/*  value is neccessary value ki jagh or kuch kre to nahi hoga*/}

    </form>
    </>
  )
}
// all the state using real time form using react component
// HTML me kya hota hai normal form hota hi jisme normal text hota hai but react me khud form ko sambhalta hai isliye form react ke component ke under Aya.

export default Form
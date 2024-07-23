import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [count , setCount]= useState(0);
    let  onHandleChange =()=>{
    setCount((curr)=> curr+1);
    }
    useEffect((function KuchBhiNameDedo(){
        console.log("isme finction name me kuch bhi name dedo jisko hame invoke krne ki jarurat nhi padhti");
        
    }))
  return (
   <>
   <h1>count: {count}</h1>
   <button onClick={onHandleChange}>+1</button>
   </>
  )
}

export default Counter
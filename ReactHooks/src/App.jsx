import React, { useState } from 'react'

const App = () => {

 let [count , setCount] =  useState(0);
  let increaseCount = ()=>{
    count++;
   
    setCount(count++);
    // console.log(count)
  }
  return (
    <>
    <div className="count">
      <h2>count = {count}</h2>
      <button onClick={increaseCount}>Increase here!!</button>

    </div>
    </>
  )
}

export default App
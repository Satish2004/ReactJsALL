import React from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {

  let[isLike , setisLike] = useState(false);  
  // most important think that 
  // we can use hook under only components
  // also we can define multiple time UseState in one component
  
  let handleLikebtn=()=>{
setisLike(!isLike);
  //  console.log(isLike)
  }
let style ={
  color :"red"
}
  return (
  <>
  <div className="likeConatiner">
  <p onClick= {handleLikebtn}>
 { isLike ?   <i className="fa-solid fa-heart" style={style}></i>:<i class="fa-regular fa-heart"></i>}


  </p>
  </div>
  </>
  )
}

export default App
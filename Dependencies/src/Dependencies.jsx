import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Dependencies = () => {
    let[Countx, setCountx] =useState(0);
    let[County, setCounty] =useState(0);
    let handleOnClickx =()=>{
        setCountx((curr)=>curr+1)
    };
    let handleOnClicky =()=>{
        setCounty((curr)=>curr+1)
    };
    useEffect(function someThing(){
        console.log("useEffect");
    },[Countx , County]);

    // can be only access [Countx]
    // can be only access [County]
    // can be both [Countx , County]
    // can only single time on render component-> [];
  return (
    <>
    <h1>count :{Countx}</h1>
    <button onClick={handleOnClickx}>+1</button>
    <br /><br />
    <h1>count :{County}</h1>
    <button onClick={handleOnClicky}>+1</button>
    </>
  )
}

export default Dependencies
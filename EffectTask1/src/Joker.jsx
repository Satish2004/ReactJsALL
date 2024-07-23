import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./App.css";

const Joker = () => {
    let[joke , setjoke] = useState({});
    let URL = "https://official-joke-api.appspot.com/random_joke";
    let AddnewJoke =async()=>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
    console.log(jsonResponse);
    setjoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline
    })

    }
    useEffect(()=>{
        async function getNew() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
      ;
        setjoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        })
        }
        getNew();
    },[])
  return (
  <>
<div className="jokeContainer">
      
  <h2>Welcome to joke world!</h2>
  <p>{joke.setup}</p>
  <p>{joke.punchline}</p>
  <button onClick={AddnewJoke}>get new joke</button>
</div>
  </>
  )
}

export default Joker
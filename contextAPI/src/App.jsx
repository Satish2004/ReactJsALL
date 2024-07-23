import './App.css'
import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'


const App = () => {
  return (
    <UserContextProvider>
    <h1>React with context API</h1>
    <p>we can handle more number of props using Context so Api simply we will make global components and pass who actually want this data </p>
    <Login></Login>
    <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
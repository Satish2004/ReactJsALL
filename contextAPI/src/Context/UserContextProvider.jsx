import React, { useState } from 'react'


const UserContextProvider = () => {
    let [user,setUser] = useState({
         user , setUser,
    })
  return (
    <UserContext.Provider>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
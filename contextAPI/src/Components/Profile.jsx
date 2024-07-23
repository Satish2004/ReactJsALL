import React, { createContext, useContext } from 'react'
import UserContext from '../Context/UserContext'


const Profile = () => {
    const {user} = useContext(createContext);
if(!user)
    return  <div>please login your self</div>
    return <div>Welcome {user.userName}</div>
}

export default Profile
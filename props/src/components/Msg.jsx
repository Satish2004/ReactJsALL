import React from 'react'
import MsgAll from './MsgAll'

const msg = () => {
  return (
   <>
<MsgAll userName = "satish" textColor="yellow"></MsgAll>
<MsgAll userName = "chandra" textColor="red"></MsgAll>
<MsgAll userName = "satish chandra" textColor="blue"></MsgAll>
   </>
  )
}

export default msg
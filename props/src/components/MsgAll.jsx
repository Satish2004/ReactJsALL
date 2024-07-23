import React from 'react'


const MsgAll = ({userName ,textColor}) => {
    let style = {color: textColor}
  return (
    <>
  <h3 style={style}>Hello: {userName} </h3>
  
    </>
  )
}

export default MsgAll
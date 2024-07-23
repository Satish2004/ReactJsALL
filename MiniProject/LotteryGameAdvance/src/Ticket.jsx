import React from 'react'
import TicketNum from './TicketNum'
import "./App.css"

const Ticket = ({Ticket}) => {
  return (
<>
<p>Ticket</p>
<div className="Ticket">
{Ticket.map((num  ,idx)=>(
    <TicketNum num={num} key={idx}></TicketNum>
))}
</div>
</>
  )
}

export default Ticket
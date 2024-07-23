
import './App.css'
import React, { useState } from 'react';
import Lottery from './Lottery';
import { TicketRandomGen,sum} from './TicketGenHelper';
 import TicketConatiner from './TicketConatiner';


const App = () => {
  let [Ticket , setTicket]=useState(TicketRandomGen(3));
  let isTicketSum = sum(Ticket);
  isTicketSum ===15;
let butTicket=()=>{
  setTicket(TicketRaTicketRandomGen(3));
}
  return (
<>
<Lottery></Lottery>
<TicketConatiner Ticket={Ticket}></TicketConatiner>
<h3>{isTicketSum && "Congratulation You Wo"}</h3>
<button onClick={butTicket}>Buy new Ticket</button>



</>
  )
}

export default App
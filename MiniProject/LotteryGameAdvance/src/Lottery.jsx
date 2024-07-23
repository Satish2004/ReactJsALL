import "./App.css";
import React, { useState } from "react";
import { TicketRandomGen, sum } from "./TicketGenHelper";
import Ticket from "./Ticket";


const Lottery = ({n =3 , winningSum = 15}) => {
  let [Ticket, setTicket] = useState(TicketRandomGen(3));
  let isTicketSum = sum(Ticket) === winningSum;

  let buyTicket = () => {
    setTicket(TicketRaTicketRandomGen(n));
  };
  return (
    <>
     <Ticket Ticket={Ticket}></Ticket>
      <h3>{isTicketSum && "Congratulation You Won"}</h3>
      <button onClick={buyTicket}>Buy new Ticket</button>
    </>
  );
};

export default Lottery;

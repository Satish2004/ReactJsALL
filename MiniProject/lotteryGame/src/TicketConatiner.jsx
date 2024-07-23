import React from "react";

const TicketConatiner = ({ Ticket }) => {
  return (
    <>
      <div className="TicketContainer">
        <span>{Ticket[0]}</span>
        &nbsp; &nbsp;&nbsp;
        <span>{Ticket[0]}</span>
        &nbsp; &nbsp;&nbsp;
        <span>{Ticket[0]}</span>
      </div>
    </>
  );
};

export default TicketConatiner;

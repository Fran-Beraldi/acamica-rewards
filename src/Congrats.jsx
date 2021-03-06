import React from "react";

const Congrats = (props) => {
  return (
    <div className="modal">
      <div className="message">
        <img className="icon-message" src="./recursos/tick.png" alt="success" />
        <h1>CONGRATS</h1>
        <p>Fantastic! Your purchase will be added to your history</p>
        <button onClick={()=>props.actualizarCongratsOpen(false)}>CONTINUE</button>
      </div>
    </div>
  );
};

export default Congrats;
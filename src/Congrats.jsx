import React from "react";

const Congrats = () => {
  return (
    <div className="modal">
      <div className="message">
        <img className="icon-message" src="/recursos/tick.png" alt="success" />
        <h1>CONGRATS</h1>
        <p>You have done an awesome job!</p>
        <button>CONTINUE</button>
      </div>
    </div>
  );
};

export default Congrats;
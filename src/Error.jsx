import React from "react";


const Error = (props) => {
  return (
    <div className="modal">
      <div className="message">
        <img className="icon-message" src="./recursos/close.png" alt="error" />
        <h2>ERROR</h2>
        <p>Oh no! Something went wrong!</p>
        <button onClick={()=>props.actualizarErrorOpen(false)}>TRY AGAIN</button>
      </div>
    </div>
  );
};

export default Error;
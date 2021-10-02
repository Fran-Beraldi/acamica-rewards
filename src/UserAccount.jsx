import React from "react";

export default function UserAccount(props) {
  return (
    <div className="Account">
      <div className="account-title">Historial</div>
      <ul>
        {props.user.redeemHistory.slice(0, 30).map((item) => {
          return <p>{item.name}</p>;
        })}
      </ul>
    </div>
  );
}
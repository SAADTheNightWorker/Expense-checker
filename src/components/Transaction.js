import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ text, id, amount }) => {
  
  const { delteTrasation } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={amount < 0 ? "minus" : "plus"} key={id}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
        <button onClick={() => delteTrasation(id)} className="delete-btn">
          -
        </button>
      </span>
    </li>
  );
};

export default Transaction;

import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transations } = useContext(GlobalContext);
  console.log(transations);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transations.map((transation) => (
          <Transaction text={transation.text} id={transation.id} amount={transation.amount}  />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;

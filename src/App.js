import React, { useState, useEffect } from "react";
import Table from "./Components/Table/Table";

import { getTransactions } from "./Api/api";
import { calculateTotalPoints, getMonths } from "./Util/Util";

import Form from "./Components/Form/Form";

export default function App() {
  const [calculatedData, setCalculatedData] = useState([]);
  const [month, setMonth] = useState({ monthIndex: [], monthName: [] });

  useEffect(() => {
    getTransactions(new Date(), 3).then((data) => {
      console.log(data);
      setCalculatedData(calculateTotalPoints(data));
    });
    const currDate = new Date();
    setMonth(getMonths(currDate.getMonth(), 3));
  }, []);

  function handleSubmit(e, inputMonth, inputYear, inputNumMonth) {
    e.preventDefault();
    getTransactions(new Date(`${Number(inputMonth) + 1}/1/${inputYear}`), inputNumMonth).then((data) => {
      setCalculatedData(calculateTotalPoints(data));
    });
    setMonth(getMonths(Number(inputMonth), inputNumMonth));
  }

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      <Table
        headers={["customerId", ...month.monthName, "total"]}
        displayData={calculatedData}
        displayOrder={["customerId", ...month.monthIndex, "totalPoint"]}
        idKey="customerId"
      />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Table from "./Components/Table/Table";

import { getTransactions } from "./Api/api";
import { calculateTotalPoints, getMonths } from "./Util/Util";

import "./Styles/App.scss";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function App() {
  const [calculatedData, setCalculatedData] = useState([]);
  const [month, setMonth] = useState({ monthIndex: [], monthName: [] });

  const [inputMonth, setInputMonth] = useState(0);
  const [inputNumMonth, setInputNumMonth] = useState(3);
  const [inputYear, setInputYear] = useState(2023);

  useEffect(() => {
    getTransactions(new Date(), 3).then((data) => {
      console.log(data);
      setCalculatedData(calculateTotalPoints(data));
    });
    const currDate = new Date();
    setMonth(getMonths(currDate.getMonth(), 3));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    getTransactions(new Date(`${Number(inputMonth) + 1}/1/${inputYear}`), inputNumMonth).then((data) => {
      setCalculatedData(calculateTotalPoints(data));
    });
    setMonth(getMonths(Number(inputMonth), inputNumMonth));
  }

  return (
    <div className="App">
      <div className="Form__Container">
        <form className="Form" onSubmit={handleSubmit}>
          <label className="Form__Label">Month: </label>
          <select
            onChange={(e) => {
              setInputMonth(e.target.value);
            }}
            className="Form__Input"
          >
            {months.map((month, index) => {
              return <option value={index}>{month}</option>;
            })}
          </select>
          <br />
          <label className="Form__Label"> Year: </label>
          <input
            type="number"
            className="Form__Input"
            value={inputYear}
            onChange={(e) => {
              setInputYear(e.target.value);
            }}
          />
          <br />
          <label className="Form__Label"> Number of Months: </label>
          <input
            type="number"
            className="Form__Input"
            value={inputNumMonth}
            onChange={(e) => {
              setInputNumMonth(e.target.value);
            }}
          />
          <br />
          <input className="Form__Submit" type="submit" value="Submit" />
        </form>
      </div>
      <Table
        headers={["customerId", ...month.monthName, "total"]}
        displayData={calculatedData}
        displayOrder={["customerId", ...month.monthIndex, "totalPoint"]}
        idKey="customerId"
      />
    </div>
  );
}

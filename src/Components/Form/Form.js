import React, {useState} from "react";

import "../../Styles/Form.scss"

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

export default function Form({handleSubmit}) {
  const [inputMonth, setInputMonth] = useState(0);
  const [inputNumMonth, setInputNumMonth] = useState(3);
  const [inputYear, setInputYear] = useState(2023);



  return (
    <div className="Form__Container">
      <form className="Form" onSubmit={(e) => {handleSubmit(e, inputMonth, inputYear, inputNumMonth)}}>
        <label className="Form__Label">Month: </label>
        <select
          onChange={(e) => {
            setInputMonth(e.target.value);
          }}
          className="Form__Input"
          value={inputMonth}
          aria-label="input-Month"
        >
          {months.map((month, index) => {
            return <option value={index} key={month}>{month}</option>;
          })}
        </select>
        <br />
        <label className="Form__Label"> Year: </label>
        <input
          type="number"
          className="Form__Input"
          aria-label="input-Year"
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
          aria-label="input-NumMonth"
          value={inputNumMonth}
          onChange={(e) => {
            setInputNumMonth(e.target.value);
          }}
        />
        <br />
        <input className="Form__Submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

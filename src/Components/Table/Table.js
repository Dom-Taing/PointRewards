import React from "react";
import "../../Styles/Table.scss";

// headers: an array of string for the header you would like to display. must have the same length as the number of element in a single displayData entry
// displayData: an array of object to display the data
// displayOrder: an array the is the key to the element in every displayData entry order in which you would like to display the data from left to right
// idKey: a value, in which is 1 of the keys in displayData, which is the id
export default function Table({ headers = [], displayData = [], displayOrder = [], idKey = "" }) {
  return (
    <table className="Table">
      <thead className="Table__header Table__row">
        <tr>
          {headers.map((head) => {
            return (
              <th key={head} className="Table__ele">
                {head}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {displayData.map((data, index) => {
          return (
            <tr key={data[idKey]} className="Table__row">
              {displayOrder.map((order) => {
                return (
                  <td key={data[idKey] + order} className="Table__ele">
                    {data[order] ? data[order] : 0}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

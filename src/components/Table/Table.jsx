import React from "react";
import "./table.css";

export const Table = ({ excelData = [] }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {excelData[0] &&
              excelData[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {excelData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

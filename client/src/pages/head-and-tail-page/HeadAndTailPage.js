import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./HeadAndTailPage.css";

function HeadAndTailPage() {
  const [selectedValue, setSelectedValue] = useState("");
  const [viewData, setViewData] = useState([]);

  function handleSelectOnChange(e) {
    setSelectedValue(e.target.value);
  }

  function handleSubmit() {
    // If value is not selected
    if (!selectedValue) {
      alert("Select a value from drop down");
    }
    // If no data is available
    else if (viewData.length === 0) {
      setViewData([[selectedValue]]);
    } else {
      let lastArray = [...viewData[viewData.length - 1]];
      // If last added element is diffrent then selected one
      if (lastArray[0] !== selectedValue) {
        setViewData((prev) => {
          return [...prev, [selectedValue]];
        });
      } else {
        // If last added element is same as selected one
        setViewData((prev) => {
          let newArray = [...prev];
          lastArray.push(selectedValue);
          newArray[newArray.length - 1] = lastArray;
          return newArray;
        });
      }
    }
    setSelectedValue("");
  }

  return (
    <div>
      <Link to={"/home"} replace={true}>
        Home
      </Link>
      <div className="ht-form">
        <select
          className="ht-select"
          onChange={handleSelectOnChange}
          value={selectedValue}
        >
          <option value="">select value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="ht-form-op">
        {viewData.map((dataArray, idx) => {
          return (
            <div className="ht-form-data-column" key={idx}>
              {dataArray.map((ele, idx) => {
                return (
                  <div key={`${new Date().getMilliseconds()}-${idx}`}>
                    {ele}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeadAndTailPage;

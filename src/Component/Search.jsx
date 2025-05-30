import React, { useState } from "react";
import medical_records from "../medicalrecords";

function Search({  setId, id }) {
  const [selected, setSelected] = useState("0");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  
  const handleShow = () => {
    if (selected === "0") {
      alert("Please select a patient name");
    } else {
      setId(selected);
    }
  };

  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select
          data-testid="patient-name"
          defaultValue="0"
          onChange={handleChange}
        >
          <option value="0" disabled>
            Select Patient
          </option>
          {medical_records.map((patient) => (
            <option key={patient.id} value={patient.id}>
              {patient.data[0].userName}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" data-testid="show" onClick={handleShow}>
        Show
      </button>
    </div>
  );
}

export default Search;

import React, { useState } from "react";
import medical_records from "../medicalrecords";

function Records({ selectedId, setId }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  };

  if (!selectedId) {
    return null; // or a placeholder like "Select a patient"
  }

  const patientIndex = medical_records.findIndex(
    (patient) => patient.id === selectedId
  );

  if (patientIndex === -1) {
    return <div>Please select a patient to view records.</div>;
  }

  const patient = medical_records[patientIndex];
  const record = patient.data[0];

  const handleNext = () => {
    const nextIndex = (patientIndex + 1) % medical_records.length;
    setId(medical_records[nextIndex].id);
  };

  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div
          id="patient-profile"
          data-testid="patient-profile"
          className="mx-auto"
        >
          <h4 id="patient-name">{record.userName}</h4>
          <h5 id="patient-dob">DOB: {record.userDob}</h5>
          <h5 id="patient-height">Height: {record.meta.height} cm</h5>
        </div>
        <button
          className="mt-10 mr-10"
          data-testid="next-btn"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          {patient.data.map((rec, index) => (
            <tr key={rec.id}>
              <td>{index + 1}</td>
              <td>{formatDate(rec.timestamp)}</td>
              <td>{rec.diagnosis.name}</td>
              <td>{rec.meta.weight} kg</td>
              <td>{rec.doctor.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import everBg from "../../assets/ever_bg.jpg";
import loading from "../../assets/loading.gif";

const MedicalClg = function () {
  const [medicalData, setMedData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
      .then(({ data: jsonData }) => {
        setMedData(jsonData.data.medicalColleges);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Image src={everBg} fluid />
      <center>
        <h2>Medical Colleges & Beds</h2>
        {medicalData ? (
          <Table striped bordered hover id="myTable">
            <thead>
              <th>State Name</th>
              <th>Institute Name</th>
              <th>City</th>
              <th>Type</th>
              <th>Admission Capacity</th>
              <th>Hospital Beds</th>
            </thead>
            <tbody>
              {medicalData.map((data) => {
                return (
                  <tr key={data.state}>
                    <td>{data.state}</td>
                    <td>{data.name}</td>
                    <td>{data.city}</td>
                    <td>{data.ownership}</td>
                    <td>{data.admissionCapacity}</td>
                    <td>{data.hospitalBeds}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <Image src={loading} fluid />
        )}
      </center>
    </div>
  );
};

export default MedicalClg;

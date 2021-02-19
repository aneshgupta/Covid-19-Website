import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import everBg from "../../assets/ever_bg.jpg";
import loading from "../../assets/loading.gif";
const HospitalBeds = function () {
  const [hospitalData, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/hospitals/beds")
      .then(({ data: jsonData }) => {
        setData(jsonData.data.regional);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Image src={everBg} fluid />
      <center>
        <h2>Hospital & Beds</h2>
        {hospitalData ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>State Name</th>
                <th>Rural Hospitals</th>
                <th>Rural Beds</th>
                <th>Urban Hospitals</th>
                <th>Urban Beds</th>
                <th>Total Hospitals</th>
                <th>Total Beds (State Wise)</th>
              </tr>
            </thead>
            <tbody>
              {hospitalData.map((data) => {
                return (
                  <tr key={data.state}>
                    <td>{data.state}</td>
                    <td>{data.ruralHospitals}</td>
                    <td>{data.ruralBeds}</td>
                    <td>{data.urbanHospitals}</td>
                    <td>{data.urbanBeds}</td>
                    <td>{data.totalHospitals}</td>
                    <td>{data.totalBeds}</td>
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

export default HospitalBeds;

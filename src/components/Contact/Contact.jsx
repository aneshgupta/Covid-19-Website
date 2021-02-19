import React, { useEffect, useState } from "react";
// import {StyledNotification} from './StyledNotification';
import { Container, Table, Col, Image, Spinner } from "react-bootstrap";
import axios from "axios";
import everBg from "../../assets/ever_bg.jpg";
import loading from "../../assets/loading.gif";

const Contact = function () {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/contacts")
      .then(({ data: jsonData }) => {
        setContact(jsonData.data.contacts.regional);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Image src={everBg} fluid />
      <center>
        <h2>Contact & Helpline Information</h2>
        {contact != null ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>State Name</th>
                <th>Helpline Number</th>
              </tr>
            </thead>
            <tbody>
              {contact.map((data) => {
                return (
                  <tr key={data.loc}>
                    <td>{data.loc}</td>
                    <td>{data.number}</td>
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

export default Contact;

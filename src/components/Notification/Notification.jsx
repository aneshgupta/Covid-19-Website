import React, { useEffect, useState } from "react";
import { Container, Table, Col, Image, Spinner } from "react-bootstrap";
import axios from "axios";
import everBg from "../../assets/ever_bg.jpg";
import loading from "../../assets/loading.gif";

const Notification = function () {
  const [notification, setNotification] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/notifications")
      .then(({ data: jsonData }) => {
        console.log(jsonData.data.notifications);
        setNotification(jsonData.data.notifications);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Image src={everBg} fluid />
      <center>
        <h2>Notifications & Advisories</h2>
        {notification ? (
          <Table striped bordered hover responsive>
            <thead>
              <th>Date</th>
              <th>Notification Title</th>
              <th>Link</th>
            </thead>
            <tbody>
              {notification.map((data) => {
                return (
                  <tr key={data.title.slice(0, 11)}>
                    <td>{data.title.slice(0, 11)}</td>
                    <td>{data.title.slice(11)}</td>
                    <td>
                      <a href={data.link}>{data.link}</a>
                    </td>
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

export default Notification;

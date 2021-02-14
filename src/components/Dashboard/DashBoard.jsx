import axios from "axios";
import React, { useState, useEffect } from "react";
import { Image, Jumbotron } from "react-bootstrap";
import loading from "../../assets/loading.gif";
import CountUp from "react-countup";

const DashBoard = function () {
  const [summary, setSummary] = useState(null);
  let length;
  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/stats/history")
      .then(({ data: jsonData }) => {
        setSummary(jsonData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (summary) {
    length = summary.length;
  }
  return (
    <div>
      {summary ? (
        <Jumbotron>
          <center>
            <h2>Covid-19 Dashboard</h2>
          </center>
          <p>Updated: {summary[length - 1].day}</p>
          <h2>Global Situation</h2>
          <h1>
            <CountUp end={summary[length - 1].summary.total} />
          </h1>
          <h4>Confirmed cases</h4>
          <br></br>
          <h2>India Situation</h2>
          <h1>
            <CountUp end={summary[length - 1].summary.confirmedCasesIndian} />
          </h1>
          <h4>Confirmed cases</h4>
          <br></br>
          <h1>
            <CountUp end={summary[length - 1].summary.discharged} />
          </h1>
          <h4>Discharged</h4>
          <br></br>
          <h1>
            <CountUp end={summary[length - 1].summary.deaths} />
          </h1>
          <h4>Deaths</h4>
        </Jumbotron>
      ) : (
        <center>
          <Image src={loading} fluid />
        </center>
      )}
    </div>
  );
};

export default DashBoard;

import { useState } from "react";
import Map from "./Map";
import Leeds from "../assets/images/Leeds.jpeg";
import London from "../assets/images/London.jpeg";
import Sydney from "../assets/images/Sydney.jpeg";
import Berlin from "../assets/images/Berlin.jpeg";
import Milan from "../assets/images/Milan.jpeg";
import Woking from "../assets/images/Woking.jpeg";
import NewYork from "../assets/images/NewYork.jpeg";

function ExamCard({ exam }) {
  const [showMap, setShowMap] = useState(false);
  const handleViewMapClick = () => {
    setShowMap(!showMap);
  };

  return (
    <li className="exam-card">
      <div className="exam-details">
        <h2>{exam.Title}</h2>
        <p>
          <b>Description: </b>
          {exam.Description}
        </p>
        <p>
          <b>Candidate:{"  "}</b>
          {exam.CandidateName}
          {"  "} <em>(ID: {exam.Candidateid})</em>
        </p>
        <p>
          <b>Date: </b>
          {exam.Date}
        </p>
        <p>
          <b>Location: </b>
          {exam.LocationName}
        </p>
        <button onClick={handleViewMapClick}>📍 View map</button>
      </div>
      {!showMap && (
        <img
          className="city-img"
          src={
            exam.LocationName === "Leeds"
              ? Leeds
              : exam.LocationName === "London"
              ? London
              : exam.LocationName === "Sydney"
              ? Sydney
              : exam.LocationName === "Berlin"
              ? Berlin
              : exam.LocationName === "Milan"
              ? Milan
              : exam.LocationName === "Woking"
              ? Woking
              : NewYork
          }
          alt={`${exam.LocationName} city centre`}
        />
      )}
      {showMap && (
        <div className="map-container">
          <Map
            latitude={exam.Latitude}
            longitude={exam.Longitude}
            id={exam.id}
          />
        </div>
      )}
    </li>
  );
}

export default ExamCard;

import { useState } from "react";
import Map from "./Map";

function ExamCard({ exam }) {
  const [showMap, setShowMap] = useState(false);
  const handleViewMapClick = () => {
    setShowMap(!showMap);
  };

  return (
    <li className="exam-card">
      <div class="exam-details">
        <h2>{exam.Title}</h2>
        <p>{exam.Description}</p>
        <p>{exam.Candidateid}</p>
        <p>{exam.CandidateName}</p>
        <p>{exam.Date}</p>
        <p>{exam.LocationName}</p>
        <button onClick={handleViewMapClick}>View map</button>
      </div>
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

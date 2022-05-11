import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles, getAllTrainings } from "./services/profileService";
import { TrainingCard } from "./components/TrainingCard";

function Trainings() {
  const [trainings, setTrainings] = useState(null);

  useEffect(() => {
    async function getTrainings() {
      if (!trainings) {
        const response = await getAllTrainings();
        setTrainings(response);
      }
    }

    getTrainings();
  }, [trainings]);

  const renderTraining = (training) => {
    return (
      <TrainingCard
        key={training._id}
        title={training.title}
        duration={training.duration}
        level={training.level}
        src="https://i.dailymail.co.uk/1s/2019/10/25/05/20165588-7611935-image-a-26_1571979013466.jpg"
      >
        {" "}
      </TrainingCard>
    );
  };

  return (
    <div>
      {/* <Button variant="text">Text</Button> */}

      {trainings && trainings.length > 0 ? (
        trainings.map((training) => renderTraining(training))
      ) : (
        <p>No trainings found</p>
      )}
    </div>
  );
}

export default Trainings;

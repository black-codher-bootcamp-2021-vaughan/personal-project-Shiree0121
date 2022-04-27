import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";
import {TrainingCard} from  "./components/TrainingCard";

function App() {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  const renderProfile = (user) => {
    return (
      <TrainingCard title={user.first_name} duration={10} level={3} videoUrl={user.videoUrl}> </TrainingCard> 
      // <li key={user._id}>
      //   <h3>
      //     {`${user.first_name} 
      //     ${user.last_name}`}
      //   </h3>
      //   <p>{user.location}</p>
      // </li>
    );
  };

  return (
  <div>
    {/* <Button variant="text">Text</Button> */}
    
      <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    </div>
  );
}

export default App;

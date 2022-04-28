import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
// import { Newlogins } from "../services/Newlogins";


//  this is how you can customerize designs as it is css sx={{ maxWidth: 345 }} 

export const TrainingCard = ({ title, level, duration, date, videoUrl }) => {
  console.log(videoUrl);
  return (
      <Card key={title}> 
     <CardMedia
        component="iframe"
        image={"https://www.youtube.com/embed/"+videoUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Avatar>H</Avatar>
        {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}
        <Typography variant="body2" color="text.secondary">
          {duration}
          {level}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

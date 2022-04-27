import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export const TrainingCard = ({ title, level, duration, date, videoUrl }) => {
  console.log(videoUrl);
  return (
    <Card sx={{ maxWidth: 345 }} key={title}>
      {/* //   <iframe
    //     width="560"
    //     height="315"
    //     src="https://www.youtube.com/embed/yd5MyF65nOY"
    //     title="YouTube video player"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowfullscreen
    //   ></iframe> */}
      <CardMedia
        component="iframe"
        image={"https://www.youtube.com/embed/"+videoUrl}
      />
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

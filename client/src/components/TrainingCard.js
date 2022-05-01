import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Grid, Chip } from "@mui/material";
// import { Newlogins } from "../services/Newlogins";

//  this is how you can customerize designs as it is css sx={{ maxWidth: 345 }}

export const TrainingCard = ({ title, level, duration, date, videoUrl }) => {
  console.log(videoUrl);
  return (
    <Card key={title}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {" "}
          <CardMedia
            component="iframe"
            image={"https://www.youtube.com/embed/" + videoUrl}
          />
        </Grid>
        <Grid item xs={4}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Chip label={level} variant="outlined" />
            {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}
            <Typography variant="body2" color="text.secondary">
              {duration}
              {level}
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={4}>
          <CardActions>
            <Button size="small">Sign up</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

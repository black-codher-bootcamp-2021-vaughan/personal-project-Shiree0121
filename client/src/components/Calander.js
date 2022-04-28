import React from "react";
import { Grid } from "@mui/material";
import { Avatar } from "@mui/material";
var day = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
const tomorrowDate = new Date(day);
tomorrowDate.setDate(tomorrowDate.getDate() + 1);

const twodaysDate = new Date(day);
twodaysDate.setDate(twodaysDate.getDate() + 2);

export const Calendar = () => {
  const today = {
    name: weekday[day.getDay()],
    date: day.getDate(),
  };
  const tomorrow = {
    name: weekday[day.getDay() + 1],
    date: tomorrowDate.getDate(),
  };
  const twodays = {
    name: weekday[day.getDay() + 2],
    date: twodaysDate.getDate(),
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {today.name}
        <Avatar>{today.date}</Avatar>
      </Grid>
      <Grid item xs={2}>
        {tomorrow.name}
        <Avatar>{tomorrow.date}</Avatar>
      </Grid>
      <Grid item xs={2}>
      {twodays.name}
        <Avatar>{twodays.date}</Avatar>
      </Grid>
      <Grid item xs={2}>
        Thursday
        <Avatar>06</Avatar>
      </Grid>
      <Grid item xs={2}>
        Friday
        <Avatar>07</Avatar>
      </Grid>
      <Grid item xs={2}>
        Saturday
        <Avatar>08</Avatar>
      </Grid>
    </Grid>
  );
};

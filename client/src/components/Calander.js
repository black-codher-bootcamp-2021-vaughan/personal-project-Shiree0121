import React from "react";
import { Grid } from "@mui/material";
import { Avatar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

var day = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
weekday[7] = "Sun";
weekday[8] = "Mon";
weekday[9] = "Tue";
weekday[10] = "Wed";
weekday[11] = "Thu";
weekday[12] = "Fri";
weekday[13] = "Sat";
const tomorrowDate = new Date(day);
tomorrowDate.setDate(tomorrowDate.getDate() + 1);

const twodaysDate = new Date(day);
twodaysDate.setDate(twodaysDate.getDate() + 2);

const threedaysDate = new Date(day);
threedaysDate.setDate(threedaysDate.getDate() + 3);

const fourdaysDate = new Date(day);
fourdaysDate.setDate(fourdaysDate.getDate() + 4);

const fivedaysDate = new Date(day);
fivedaysDate.setDate(fivedaysDate.getDate() + 5);

const sixdaysDate = new Date(day);
fourdaysDate.setDate(sixdaysDate.getDate() + 6);

const sevendaysDate = new Date(day);
sevendaysDate.setDate(sevendaysDate.getDate() + 7);

const eightdaysDate = new Date(day);
eightdaysDate.setDate(eightdaysDate.getDate() + 8);

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
  const threedays = {
    name: weekday[day.getDay() + 3],
    date: threedaysDate.getDate(),
  };
  const fourdays = {
    name: weekday[day.getDay() + 4],
    date: fourdaysDate.getDate(),
  };
  const fivedays = {
    name: weekday[day.getDay() + 5],
    date: fivedaysDate.getDate(),
  };
  const sixdays = {
    name: weekday[day.getDay() + 6],
    date: sixdaysDate.getDate(),
  };
  console.log('hello',day.getDay()+1)
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
        {threedays.name}
        <Avatar>{threedays.date}</Avatar>
      </Grid>
      <Grid item xs={2}>
        {fourdays.name}
        <Avatar>{fourdays.date}</Avatar>
      </Grid>
      <Grid item xs={2}>
        {fivedays.name}
        <Avatar>{fivedays.date}</Avatar>
      </Grid>
    </Grid>
  );
};

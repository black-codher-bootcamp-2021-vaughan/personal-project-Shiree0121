import React from "react";
import { Container } from "@mui/material";
import { Header } from "./Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import {Newlogins} from './Newlogins'
import { orange } from "@mui/material/colors";
import { Calendar } from "./Calander";
import Trainings from "../Trainings";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  colors: { primary: orange[500], action: orange[500] },
});

export const Welcome = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Header></Header> 
        <Calendar></Calendar>
        <br></br>
        <br></br>
       {/* <h3>Sneak-peak (signup)</h3> */}
       <br></br>
        <Trainings></Trainings>
      </Container>
    </ThemeProvider>
  );
};

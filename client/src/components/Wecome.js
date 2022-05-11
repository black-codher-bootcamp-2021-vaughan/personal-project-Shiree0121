import React from "react";
import { Container } from "@mui/material";
import { Header, Banner } from "./Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import {Newlogins} from './Newlogins'
import { orange } from "@mui/material/colors";
import { Calendar } from "./Calander";
import Trainings from "../Trainings";
import {Publictraining} from "./Publictraining"
import Popup from "./Popup";



const theme = createTheme({
  status: {
    danger: orange[500],
  },
  colors: { primary: orange[500], action: orange[500] },
});

export const Welcome = () => {
  const [open, setOpen] = React.useState(false);
  const openpopup = (event)=> {
    event.stopPropagation()
    event.preventDefault() 
    console.log("check if works")
    
    setOpen(!open)
  }

  const closePopup = (event)=> {
    event.stopPropagation()
    event.preventDefault() 
    console.log("check if works")
    
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Banner></Banner>
        <Header></Header> 
        <Calendar></Calendar>
        <br></br>
        <br></br>
        <Publictraining></Publictraining>
       {/* <h3>Sneak-peak (signup)</h3> */}
       <br></br>
        <div onClick={openpopup}>
        <Trainings></Trainings>
        </div>
        <Popup open={open} close={closePopup}></Popup>
      </Container>
    </ThemeProvider>
  );
};

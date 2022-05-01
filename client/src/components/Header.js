import React from "react";
import { Grid } from "@mui/material";
import { Avatar } from "@mui/material";
import { Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const Header = () => {
  const greeting = "Welcome Shiree";

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
      

        <Avatar
          alt="Remy Sharp"
          src="https://randomuser.me/api/portraits/women/19.jpg"
        />
      </Grid>
      <Grid item xs={8}>
        <h3>{greeting}</h3>
        <h4> Location </h4>
      </Grid>
      <Grid item xs={2}>
        <Badge badgeContent={4} color="primary">
          <NotificationsNoneIcon color="action" />
        </Badge>
      </Grid>
    </Grid>
  );
};

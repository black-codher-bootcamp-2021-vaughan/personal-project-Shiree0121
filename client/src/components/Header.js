import React from "react";
import { Grid } from "@mui/material";
import { Avatar } from "@mui/material";
import { Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Battery6BarIcon from "@mui/icons-material/Battery6Bar";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import EMobiledataIcon from "@mui/icons-material/EMobiledata";

export const Banner = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Grid item xs={6}>
        <EMobiledataIcon color="primary" />
      </Grid>
      <Grid item xs={2} sx={{}}>
        <SignalCellularAltIcon color="primary" />
        <NotificationsNoneIcon color="primary" />
      </Grid>
      <Grid item xs={2}>
        <NetworkWifiIcon color="primary" />
      </Grid>
      <Grid item xs={2}>
        <Battery6BarIcon color="primary" />
      </Grid>
    </Grid>
  );
};

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
        <h4> Location: Birmingham </h4>
      </Grid>
      <Grid item xs={2}>
        <Badge badgeContent={4} color="primary">
          <NotificationsNoneIcon color="action" />
        </Badge>
      </Grid>
    </Grid>
  );
};

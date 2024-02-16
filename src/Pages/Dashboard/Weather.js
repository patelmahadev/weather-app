import React from "react";
import moment from "moment";
import Card from "@mui/material/Card";
import RefreshIcon from "@mui/icons-material/Cached";
import HumidityIcon from "../../Assets/humidity.png";
import cloudicon from "../../Assets/clouds.png";
import SunriseIcon from "../../Assets/sunrise.png";
import SunsetIcon from "../../Assets/sunset.png";

import {
  Box,
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Weather = ({ data, handleRefresh, isRefresh }) => {
  const date = `${moment().format("dddd")}, ${moment().format("LL")}`;

  return (
    <Card sx={{ minWidth: 275 }} className="card-weather-wrapper">
      <Grid container height={"100%"}>
        <Grid item xs={6}>
          <Box className="temprature-wrapper">
            <Box className="date-time-wrapper">
              <ListItem>
                <span>{date}</span>
              </ListItem>
            </Box>
            <Box className="temprature-num-wrapper">
              <Typography variant="h5" component="h2">
                {`${data?.main?.temp ?? 0}`}&deg;C
              </Typography>
              <span>{data?.name ?? "NA"}</span>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} className="weather-info-wrapper">
          <p className="refresh-wrapper">
            <IconButton
              className={`reload-icon ${isRefresh ? "refreshing" : ""}`}
              aria-label="delete"
              disabled={isRefresh}
              onClick={handleRefresh}
            >
              <RefreshIcon />
            </IconButton>
          </p>
          <Box gap={"18px"} display={"flex"} flexDirection={"column"}>
            <ListItem disableGutters>
              <ListItemText primary={data?.weather[0]?.main} />
              <img src={cloudicon} alt="clouds" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={`Humidity: ${data?.main?.humidity ?? 0} %`}
              />
              <img src={HumidityIcon} alt="Humidity" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={`Sunrise: ${new Date(
                  data?.sys?.sunrise * 1000
                ).toLocaleTimeString("en-IN")}`}
              />
              <img src={SunsetIcon} alt="Sunrise" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                primary={`Sunset: ${new Date(
                  data?.sys?.sunset * 1000
                ).toLocaleTimeString("en-IN")}`}
              />
              <img src={SunriseIcon} alt="Sunrise" />
            </ListItem>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Weather;

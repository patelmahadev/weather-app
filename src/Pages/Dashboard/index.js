import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import API from "../../Services/Api";
import Weather from "./Weather";
import PageLoader from "../../Components/Loader/Loader";
import "./Dashboard.Style.scss";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [coords, setCoords] = useState({});
  const [isRefresh, setIsRefresh] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * @LIFE_CYCLE_METHOD
   * Below life cycle method will call only once, after render component
   */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoords({
        lat: position?.coords?.latitude,
        long: position?.coords?.longitude,
      });
    });
  }, []);

  /**
   * @LIFE_CYCLE_METHOD
   * Below life cycle method will call when the isRefresh/coords.lat value will change
   */
  useEffect(() => {
    if (coords?.lat) {
      fetchWeatherData();
    }
  }, [coords?.lat, isRefresh]);

  /**
   * @FETCH_WEATHER
   * Below method is used to fetch data from the api
   */
  const fetchWeatherData = async () => {
    const params = `lat=${coords.lat}&lon=${coords.long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
    const result = await API.get(`/weather/?${params}`);
    setTimeout(() => {
      setLoading(false);
      setIsRefresh(false);
    }, 500);
    if (result?.status === 200) {
      setData(result?.data);
    }
  };

  return (
    <React.Fragment>
      <PageLoader loading={loading} />

      <Weather
        data={data}
        isRefresh={isRefresh}
        handleRefresh={() => setIsRefresh(true)}
      />
    </React.Fragment>
  );
};
export default Dashboard;

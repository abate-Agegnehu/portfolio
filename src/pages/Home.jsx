import { makeStyles } from "@material-ui/core";
import React from "react";
import oa from "../images/oa.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to right, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
    height: "100vh",
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto", // Allow height to adjust on smaller screens
    },
  },
  left: {
    flex: 1,
    margin: "5% 3%",
    maxWidth: "50%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%", // Increase width on small screens
      margin: "10% 0", // Adjust margins for better spacing
    },
  },
  right: {
    flex: 1,
    margin: "5% 3%",
    maxWidth: "50%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%", // Increase width on small screens
      margin: "10% 0", // Adjust margins for better spacing
    },
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px", // Optional: Add border radius to the image for a softer look
  },
  h2: {
    color: "#01A0AA",
    fontSize: "2.5rem", // Use rem for better scaling
    fontWeight: "900",
    margin: "2px 0",
    textAlign: "center", // Center align on small screens
  },
  h1: {
    color: "#007F87",
    fontSize: "3rem", // Use rem for better scaling
    fontWeight: "900",
    margin: "2px 0",
    textAlign: "center", // Center align on small screens
  },
  h4: {
    color: "#000000",
    fontSize: "1.5rem", // Use rem for better scaling
    margin: "2px 0",
    fontWeight: "bold",
    textAlign: "center", // Center align on small screens
  },
  p: {
    fontSize: "1.25rem", // Use rem for better scaling
    fontWeight: "300",
    lineHeight: "1.6",
    textAlign: "center", // Center align on small screens
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <img src={oa} alt="Left Image" className={classes.image} />
      </div>
      <div className={classes.right}>
        <h2 className={classes.h2}>Hello It's Me</h2>
        <h1 className={classes.h1}>Abate Agegnehu</h1>
        <h4 className={classes.h4}>And I'm now</h4>
        <p className={classes.p}>
          Currently a 4th-year Software Engineering student at Wolkite
          University, Full-Stack developer
        </p>
      </div>
    </div>
  );
};

export default Home;

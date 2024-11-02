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
      height: "auto", 
    },
  },
  left: {
    flex: 1,
    margin: "5% 3%",
    maxWidth: "50%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%", 
      margin: "10% 0", 
    },
  },
  right: {
    flex: 1,
    margin: "5% 3%",
    maxWidth: "50%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%", 
      margin: "10% 0", 
    },
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  h2: {
    color: "#01A0AA",
    fontSize: "2.5rem", 
    fontWeight: "900",
    margin: "2px 0",
    textAlign: "center", 
  },
  h1: {
    color: "#007F87",
    fontSize: "3rem", 
    fontWeight: "900",
    margin: "2px 0",
  },
  h4: {
    color: "#000000",
    fontSize: "1.5rem", 
    margin: "2px 0",
    fontWeight: "bold",
    textAlign: "center", 
  },
  p: {
    fontSize: "1.25rem", 
    fontWeight: "300",
    lineHeight: "1.6",
    textAlign: "center", 
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

import { makeStyles } from "@material-ui/core";
import React from "react";
import ac from "../images/ac.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to left, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
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
    height: "auto", // Fix typo from "autho" to "auto"
    borderRadius: "10px", // Optional: Add border radius for a softer look
  },
  h1: {
    color: "#007F87",
    fontSize: "3rem", // Use rem for better scaling
    fontWeight: "bold",
    margin: "10px 0", // Adjust margin for better spacing
    textAlign: "center", // Center align the heading
  },
  p: {
    fontSize: "1.25rem", // Use rem for better scaling
    fontWeight: "300",
    lineHeight: "1.6",
    textAlign: "justify", // Justify text for better readability
  },
  hr: {
    height: "1px",
    background: "#000000",
    width: "60%",
    margin: "10px auto", // Center align the line
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <h1 className={classes.h1}>About Me</h1>
        <hr className={classes.hr} />
        <p className={classes.p}>
          Hello! I’m Abate Agegnehu, a dedicated Software Engineer specializing
          in full-stack development. I have a strong foundation in JavaScript,
          React, Node.js, Java, Spring Boot, MongoDB, and MySQL, with skills
          spanning both frontend and backend. I’m passionate about building
          seamless, user-friendly applications that showcase technical
          excellence. I thrive in collaborative environments, where I learn from
          others and contribute my knowledge. My goal is to create impactful
          solutions that address real-world challenges. Driven to keep growing,
          I’m excited to build innovative software that makes a positive
          difference.
        </p>
      </div>
      <div className={classes.right}>
        <img src={ac} alt="About Me" className={classes.image} />
      </div>
    </div>
  );
};

export default About;

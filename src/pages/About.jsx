import { makeStyles } from "@material-ui/core";
import React from "react";
import abate1 from "../images/abate1.png";

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
  h1: {
    color: "#007F87",
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "10px 0",
    textAlign: "center",
  },
  p: {
    fontSize: "1.25rem",
    fontWeight: "300",
    lineHeight: "1.6",
    textAlign: "justify",
  },
  hr: {
    height: "1px",
    background: "#000000",
    width: "60%",
    margin: "10px auto",
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
        <img src={abate1} alt="Abate Agegnehu" className={classes.image} />
      </div>
    </div>
  );
};

export default About;

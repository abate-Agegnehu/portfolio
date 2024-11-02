import { makeStyles } from "@material-ui/core";
import React from "react";
import react from "../images/react.jpg";
import javaScript from "../images/javascript.jpg";
import node from "../images/node.jpg";
import mongodb from "../images/mongodb.jpg";
import springboot from "../images/springboot.jpg";
import java from "../images/java.jpg";
import mysql from "../images/mysql.jpg";
import python from "../images/python.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(to top, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
    padding: theme.spacing(2), 
  },
  skillcontainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "30px 0",
  },
  skill: {
    margin: "10px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    textAlign: "center",
    background: "#f9f9f9",
    flex: "1 1 150px", 
    minWidth: "120px", 
  },
  image: {
    width: "80px",
    height: "80px",
  },
  hr: {
    height: "1px",
    background: "#000000",
    width: "10%",
    margin: "0 auto", 
  },
  h1: {
    color: "#007F87",
    fontSize: "3rem", 
    fontWeight: "bold",
    margin: "40px 0 20px", 
    textAlign: "center",
  },
  percentage: {
    fontSize: "1rem", 
    fontWeight: "500",
    color: "#007F87",
  },
}));

const Skill = () => {
  const classes = useStyles();

  const skills = [
    { name: "JavaScript", image: javaScript, percentage: "85%" },
    { name: "React", image: react, percentage: "80%" },
    { name: "Node.js", image: node, percentage: "75%" },
    { name: "MongoDB", image: mongodb, percentage: "70%" },
    { name: "Java", image: java, percentage: "70%" },
    { name: "Spring Boot", image: springboot, percentage: "60%" },
    { name: "MySQL", image: mysql, percentage: "80%" },
    { name: "Python", image: python, percentage: "50%" },
  ];

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.h1}>Skills</h1>
        <hr className={classes.hr} />
      </div>
      <div className={classes.skillcontainer}>
        {skills.map((skill, index) => (
          <div key={index} className={classes.skill}>
            <img src={skill.image} alt={skill.name} className={classes.image} />
            <p>{skill.name}</p>
            <p className={classes.percentage}>{skill.percentage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

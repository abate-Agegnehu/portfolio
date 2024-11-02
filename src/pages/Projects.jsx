import { makeStyles } from "@material-ui/core";
import React from "react";
import moviemania from "../images/moviemania.png";
import applewebsite from "../images/applewebsite.png";
import ecommerce from "../images/ecommerce.png";
import pokemen from "../images/pokemen.png";
import todolist from "../images/todolist.png";
import tmovie from "../images/tmovie.png";
import dashboard from "../images/dashboard.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(to top, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
    padding: theme.spacing(3),
  },
  projectcontainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  project: {
    position: "relative",
    width: "100%",
    maxWidth: "300px", 
    margin: theme.spacing(2),
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    textAlign: "center",
    background: "#f9f9f9",
    overflow: "hidden",
    "&:hover $description": {
      transform: "translateY(0)",
    },
    "&:hover $projectName": {
      opacity: 0, 
    },
    [theme.breakpoints.up("sm")]: {
      width: "45%", 
    },
    [theme.breakpoints.up("md")]: {
      width: "30%", 
    },
    [theme.breakpoints.up("lg")]: {
      width: "25%", 
    },
  },
  image: {
    width: "100%",
    height: "67%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  hr: {
    height: "1px",
    background: "#000000",
    width: "20%",
    margin: "0 auto",
  },
  h1: {
    color: "#007F87",
    fontSize: "3rem",
    fontWeight: "bold",
    margin: theme.spacing(2, 0),
    textAlign: "center",
  },
  description: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background:
      "linear-gradient(to top, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
    color: "black",
    padding: theme.spacing(1),
    textAlign: "center",
    transform: "translateY(100%)",
    transition: "transform 0.3s ease",
    height: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.1rem",
    
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  projectName: {
    transition: "opacity 0.3s ease", 
  },
}));

const Projects = () => {
  const classes = useStyles();

  const projects = [
    {
      name: "Movie Mania",
      image: moviemania,
      link: "https://moviemonia.netlify.app",
      description:
        "An interactive application for browsing the top trending movies with various filtering options.",
    },
    {
      name: "Apple Website",
      image: applewebsite,
      link: "https://resonant-semolina-5bb316.netlify.app",
      description:
        "A responsive replica of Apple's official website, featuring smooth animations and a polished interface.",
    },
    {
      name: "T-movies",
      image: tmovie,
      link: "https://github.com/abate-Agegnehu/T-movies",
      description:
        "A movie database application that showcases a wide range of popular movies channels and program, with detailed information for each.",
    },
    {
      name: "Dashboard",
      image: dashboard,
      link: "https://github.com/abate-Agegnehu/Dashboard-By-React",
      description:
        "A highly customizable React-based dashboard with features tailored for data visualization and management.",
    },
    {
      name: "Ecommerce",
      image: ecommerce,
      link: "https://github.com/abate-Agegnehu/E-commerce-by-react",
      description:
        "A versatile e-commerce platform offering a cart functionality and user-friendly product browsing.",
    },
    {
      name: "Pokmen",
      image: pokemen,
      link: "https://github.com/abate-Agegnehu/Pokemon",
      description:
        "A fun Pokémon-themed application displaying character information and stats for each Pokémon.",
    },
    {
      name: "Todo-List",
      image: todolist,
      link: "https://github.com/abate-Agegnehu/TodoList",
      description:
        "An efficient to-do list application that helps users manage and prioritize their daily tasks effectively.",
    },
  ];

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.h1}>Projects</h1>
        <hr className={classes.hr} />
      </div>
      <div className={classes.projectcontainer}>
        {projects.map((project, index) => (
          <div key={index} className={classes.project}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className={classes.image}
              />
            </a>
            <p className={classes.projectName}>{project.name}</p>
            <div className={classes.description}>{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

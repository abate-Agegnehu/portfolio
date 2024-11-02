import React, { useState, useRef } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background:
      "linear-gradient(to left, transparent 10%, rgba(10, 200, 150, 0.8) 100%)",
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  titleContainer: {
    display: "flex",
    flexGrow: 1,
    color: "black",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drawerList: {
    width: 250,
  },
  section: {
    paddingTop: theme.spacing(10),
  },
  drawerItem: {
    textAlign: "center",
  },
  drawerText: {
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  drawerPaper: {
    background:
      "linear-gradient(to left, transparent 0%, rgba(10, 200, 150, 0.6) 100%)",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    Home: homeRef,
    About: aboutRef,
    Skill: skillRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ["Home", "About", "Skill", "Projects", "Contact"];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <div className={classes.titleContainer}>
            {menuItems.map((item) => (
              <Typography
                key={item}
                variant="h6"
                onClick={() => scrollToSection(item)}
                style={{ cursor: "pointer" }}
              >
                {item}
              </Typography>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          classes: {
            root: classes.drawerPaper,
          },
        }}
      >
        <List
          className={classes.drawerList}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuItems.map((text) => (
            <ListItem button key={text} onClick={() => scrollToSection(text)}>
              <ListItemText
                primary={text}
                className={classes.drawerItem}
                classes={{ primary: classes.drawerText }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div ref={homeRef} className={classes.section}>
        <Home />
      </div>
      <div ref={aboutRef} className={classes.section}>
        <About />
      </div>
      <div ref={skillRef} className={classes.section}>
        <Skill />
      </div>
      <div ref={projectsRef} className={classes.section}>
        <Projects />
      </div>
      <div ref={contactRef} className={classes.section}>
        <Contact />
      </div>
    </div>
  );
};

export default NavBar;

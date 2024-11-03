import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    background:
      "linear-gradient(to right, transparent 0%, rgba(10, 200, 150, 0.6) 100%)",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  links: {
    margin: theme.spacing(1),
  },
  copyright: {
    marginTop: theme.spacing(1),
    color: "#6c757d",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container>
        <Typography variant="h6" className={classes.links}>
          Follow me on:
          <Link
            href="https://www.linkedin.com/in/abate-agegnehu-a78a84294/"
            target="_blank"
            rel="noopener"
            className={classes.links}
          >
            LinkedIn
          </Link>{" "}
          |
          <Link
            href="https://github.com/abate-Agegnehu"
            target="_blank"
            rel="noopener"
            className={classes.links}
          >
            GitHub
          </Link>
        </Typography>
        <Typography variant="body2" className={classes.copyright}>
          &copy; {new Date().getFullYear()} Abate Agegnehu. Innovating solutions
          through exceptional development.
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;

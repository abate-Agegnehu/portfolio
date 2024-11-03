import React, { useState } from "react";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Typography,
  Container,
  Snackbar,
  SnackbarContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    background:
      "linear-gradient(to top, transparent 60%, rgba(10, 200, 150, 0.6) 100%)",
  },

  title: {
    fontWeight: "bold",
    color: "#007F87",
  },
  hr: {
    height: "1px",
    background: "#000000",
    width: "15%",
    marginBottom: theme.spacing(3),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "500px",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: "#007F87",
    color: "white",
    "&:hover": {
      backgroundColor: "#005f66",
    },
  },
  snackbar: {
    backgroundColor: "#01A0AA",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t5mrshk",
        "template_z4ugh4s",
        formData,
        "7f3RtTbPz1kzMs0_X"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSnackbarMessage("Message sent successfully!");
          setSnackbarOpen(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setSnackbarMessage("Failed to send message. Please try again.");
          setSnackbarOpen(true);
        }
      );
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Contact Us
      </Typography>
      <hr  className={classes.hr}/>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          className={classes.input}
          required
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          className={classes.input}
          required
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          minRows={4}
          className={classes.input}
          required
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" className={classes.button}>
          Send Message
        </Button>
      </form>

      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000} 
      >
        <SnackbarContent
          className={classes.snackbar}
          message={snackbarMessage}
        />
      </Snackbar>
    </Container>
  );
};

export default Contact;

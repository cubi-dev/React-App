import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Button,
  Typography,
  Container,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Alert,
  AlertTitle,
} from "@mui/material";
export default function Add() {
  const baseURL = `https://63fc244c8ef914c555922d1a.mockapi.io/products`;
  const formik = useFormik({
    initialValues: {
      name: "",
      // nation: "",
      // club: "",
      price: 0,
      rating: 0,
      category: "",
      description: "",
      image: "",
      bestseller: false,
    },
    onSubmit: (values) => {
      fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setOpen(true);
          console.log(data);
        })
        .catch((error) => console.log(error.message));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      // nation: Yup.string()
      //   .required("Required.")
      //   .min(2, "Must be 2 characters or more"),
      // club: Yup.string()
      //   .required("Required.")
      //   .min(2, "Must be 2 characters or more"),
      price: Yup.number().integer().typeError("Please type a number."),
      rating: Yup.number().integer().typeError("Please type a number.")
      .min(1, "Must rating from 1 to 5").max(5, "Must rating from 1 to 5"),
      description: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      category: Yup.string()
        .required("Required.")
        .min(4, "Must be 4 characters or more"),
      image: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
    }),
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container sx={{ pt: 4 }}>
      <Box
      onSubmit={formik.handleSubmit} component="form">
        <Typography style={{fontSize: "24px", fontWeight: "bold"}}>Add Action</Typography>
        <TextField
          autoFocus
          id="standard-basic"
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.name}
          onChange={formik.handleChange}
          color="secondary"
        />
        {formik.errors.name && (
          <Typography variant="caption" color="red">
            {formik.errors.name}
          </Typography>
        )}
        {/* <TextField
          margin="dense"
          name="club"
          label="Club"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.club}
          onChange={formik.handleChange}
          color="secondary"
        />
        {formik.errors.club && (
          <Typography variant="caption" color="red">
            {formik.errors.club}
          </Typography>
        )} */}
        {/* <TextField
          margin="dense"
          name="nation"
          label="Nation"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.nation}
          onChange={formik.handleChange}
          color="secondary"
        />
        {formik.errors.nation && (
          <Typography variant="caption" color="red">
            {formik.errors.nation}
          </Typography>
        )} */}
        <TextField
          margin="dense"
          name="image"
          label="URL of image"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.image}
          onChange={formik.handleChange}
          color="secondary"
        />
        {formik.errors.image && (
          <Typography variant="caption" color="red">
            {formik.errors.image}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="price"
          label="Price"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.price}
          onChange={formik.handleChange}
          color="secondary"
        />
        {formik.errors.price && (
          <Typography variant="caption" color="red">
            {formik.errors.price}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="rating"
          label="Rating"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.rating}
          onChange={formik.handleChange}
          color="secondary"
        />
        {formik.errors.rating && (
          <Typography variant="caption" color="red">
            {formik.errors.rating}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="category"
          label="Category"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.category}
          onChange={formik.handleChange}
          color="secondary"
        />
        {formik.errors.category && (
          <Typography variant="caption" color="red">
            {formik.errors.category}
          </Typography>
        )}
        <TextField
          multiline
          rows={2}
          margin="dense"
          name="description"
          label="Information"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.description}
          onChange={formik.handleChange}
          color="secondary"
        />
        {formik.errors.description && (
          <Typography variant="caption" color="red" display="block">
            {formik.errors.description}
          </Typography>
        )}
        <FormControlLabel
          control={<Switch color="secondary" />}
          label="BestSeller"
          name="bestseller"
          value={formik.values.bestseller}
          onChange={formik.handleChange}
        />
        <br />
        <Button variant="contained" size="small" type="submit" color="secondary">
          Add
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Congraturation"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Alert severity="success">
                <AlertTitle>Adding successful!</AlertTitle>
              </Alert>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                Dashboard
              </Link>
            </Button>
            <Button autoFocus onClick={handleClose} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}

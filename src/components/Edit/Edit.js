import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import callApi from "../Utils/APICaller";
import { useEffect } from "react";
import { async } from "@firebase/util";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
export default function Edit() {
  // GET DATA
  const userName = useParams();
  const navigate = useNavigate();
  async function getData() {
    await callApi(`products/${userName.id}`, "GET", null).then((res) => {
      formik.setFieldValue("name", res.data.name);
      formik.setFieldValue("image", res.data.image);
      formik.setFieldValue("price", res.data.price);
      formik.setFieldValue("rating", res.data.rating);
      formik.setFieldValue("category", res.data.category);
      // formik.setFieldValue("clip", res.data.clip);
      formik.setFieldValue("description", res.data.description);
      formik.setFieldValue("bestseller", res.data.bestseller);
      console.log(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  async function editData(values) {
    await callApi(`products/${userName.id}`, "PUT", {
      name: values.name,
      rating: values.rating,
      category: values.category,
      price: values.price,
      // clip: values.clip,
      description: values.description,
      image: values.image,
      bestseller: values.bestseller,
    }).then((res) => {
      console.log(res);
    });
  }

  // FORMIK
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      price: 0,
      rating: 0,
      // clip: "",
      description: "",
      image: "",
      bestseller: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .typeError("Field must not be empty"),
        rating: Yup.number().integer().typeError("Please type a number.")
        .min(1, "Must rating from 1 to 5").max(5, "Must rating from 1 to 5"),
      category: Yup.string()
        .required("Required")
        .typeError("Field must not be empty"),
      price: Yup.number().integer().typeError("Please type a number."),
      // clip: Yup.string()
      //   .required("Required")
      //   .typeError("Field must not be empty"),
      description: Yup.string()
        .required("Required")
        .typeError("Field must not be empty"),
      image: Yup.string()
        .required("Required")
        .typeError("Field must not be empty"),
    }),
    onSubmit: (values) => {
      editData(values);
      console.log(values);
      formik.resetForm();
      navigate("/dashboard");
    },
  });

  return (
    <Container maxWidth={"xl"} sx={{ pt: 3 }}>
      <Link to="/dashboard">
        <Button variant="contained" color="secondary">
          <DashboardIcon style={{ fontSize: "medium", marginRight: "10px" }} />
          Go Back Dashboard
        </Button>
      </Link>
      {/* EDIT SPACE */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Card style={{ width: "1000px" }}>
          <CardHeader title="Edit Actions" />
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              {/*  */}
              <TextField
                margin="dense"
                name="name"
                id="name"
                label="Enter name"
                type="text"
                fullWidth
                variant="standard"
                value={formik.values.name}
                onChange={formik.handleChange}
                color="secondary"
              />
              {formik.errors.name && formik.touched.name &&(
                <Typography variant="caption" color="red">
                  {formik.errors.name}
                </Typography>
              )}
              {/*  */}
              <TextField
                margin="dense"
                name="image"
                id="image"
                label="Enter image"
                type="text"
                fullWidth
                variant="standard"
                value={formik.values.image}
                onChange={formik.handleChange}
                color="secondary"
              />
              {formik.errors.image && formik.touched.image &&(
                <Typography variant="caption" color="red">
                  {formik.errors.image}
                </Typography>
              )}
                  {/*  */}
                  <TextField
                    margin="dense"
                    name="price"
                    id="price"
                    label="Enter price"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    color="secondary"
                  />
                  {formik.errors.price && formik.touched.price &&(
                    <Typography variant="caption" color="red">
                      {formik.errors.price}
                    </Typography>
                  )}
              {/*  */}
              <TextField
                margin="dense"
                name="rating"
                id="rating"
                label="Enter rating"
                type="text"
                fullWidth
                variant="standard"
                value={formik.values.rating}
                onChange={formik.handleChange}
                color="secondary"
              />
              {formik.errors.rating && formik.touched.rating &&(
                <Typography variant="caption" color="red">
                  {formik.errors.rating}
                </Typography>
              )}
              {/*  */}
              <TextField
                margin="dense"
                name="category"
                id="category"
                label="Enter category"
                type="text"
                fullWidth
                variant="standard"
                value={formik.values.category}
                onChange={formik.handleChange}
                color="secondary"
              />
              {formik.errors.category && formik.touched.category &&(
                <Typography variant="caption" color="red">
                  {formik.errors.category}
                </Typography>
              )}
              {/*  */}
              {/* <TextField
                margin="dense"
                name="clip"
                id="clip"
                label="Enter clip"
                type="text"
                fullWidth
                variant="standard"
                value={formik.values.clip}
                onChange={formik.handleChange}
                color="secondary"
              />
              {formik.errors.clip && formik.touched.clip &&(
                <Typography variant="caption" color="red">
                  {formik.errors.clip}
                </Typography>
              )} */}
              {/*  */}
              <TextField
                margin="dense"
                name="description"
                id="description"
                label="Enter description"
                type="text"
                fullWidth
                variant="standard"
                value={formik.values.description}
                onChange={formik.handleChange}
                color="secondary"
              />
              {formik.errors.description && formik.touched.description &&(
                <Typography variant="caption" color="red">
                  {formik.errors.description}
                </Typography>
              )}

              <FormControlLabel
                control={<Switch color="secondary"/>}
                label="bestseller"
                name="bestseller"
                value={formik.values.bestseller}
                onChange={formik.handleChange}
              />
              <br></br>
              <Button variant="contained" color="secondary" type="submit">
                Edit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      {/* EDIT SPACE */}
    </Container>
  );
}

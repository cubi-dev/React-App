import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
  TableBody,
  Container,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Alert,
  AlertTitle,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BuildIcon from "@mui/icons-material/Build";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";
import callApi from "../Utils/APICaller";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";
export default function Dashboard() {
  const [list, setList] = useState([]);
  async function getData() {
    await callApi("products", "GET", null).then((res) => {
      setList(res.data);
    });
    console.log(list);
  }
  useEffect(() => {
    getData();
  });

  async function deleteData(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      await callApi("products/" + id, "DELETE", null).then((res) => {
        // _____No reload____
        // Create a copy of APIData
        const updatedData = [...list];
        // Remove the deleted data from the updated copy
        const index = updatedData.findIndex((item) => item.id === id);
        updatedData.splice(index, 1);
        // Update the APIData state with the updated copy
        setList(updatedData);
        // Set the open state to true to show the success dialog
        setOpen(true);
        console.log(res);
      });
    }
    // window.location.reload();
  }
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Container maxWidth={"xl"} sx={{ pt: 3 }}>
        <Link to="/add">
          <Button variant="contained" color="secondary">
            <AddIcon />
            Add New
          </Button>
        </Link>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Table style={{ backgroundColor: "inherit", marginBottom: "20px" }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>BestSeller</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((list, index) => (
                <TableRow
                  key={list.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{list.id}</TableCell>
                  <TableCell>
                    <img
                      style={{ width: "320px", height: "240px" }}
                      src={list.image}
                    ></img>
                  </TableCell>
                  {/* <TableCell>
                    <iframe
                      src={list.clip}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    >
                    </iframe>
                  </TableCell> */}
                  <TableCell>
                    <Typography variant="body2">{list.name}</Typography>
                  </TableCell>
                  <TableCell>{list.price}$</TableCell>
                  <TableCell>★{list.rating}</TableCell>
                  <TableCell>&#9835;{list.category}</TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      style={{ width: "200px" }}
                      noWrap
                    >
                      {list.description}
                    </Typography>
                  </TableCell>
                  <TableCell>
                  {list?.bestseller == true ? <h6 style={{fontWeight: "bold"}}>&#9829;Best Seller</h6> : <h6 style={{fontWeight: "bold"}}>Not Best Seller</h6>}
                  </TableCell>
                  <TableCell>
                    <Link to={`/${list.id}/edit`}>
                      <Button variant="contained" color="secondary">
                        <BuildIcon
                          style={{ fontSize: "medium", marginRight: "10px" }}
                        />
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteData(list.id)}
                      sx={{ mt: 3 }}
                    >
                      <ClearIcon
                        style={{ fontSize: "medium", marginRight: "10px" }}
                      />
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        {/* _____DIALOG___ */}
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
                <AlertTitle>Delete successful!</AlertTitle>
              </Alert>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              autoFocus
              onClick={handleClose}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

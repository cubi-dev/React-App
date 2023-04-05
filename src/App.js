import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import New from "./components/New/New";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { Container } from "@mui/material";
import Detail from "./components/Detail/Detail";
import Dashboard from "./components/Dashboard/Dashboard";
import { Box } from "@mui/system";
import Add from "./components/Add/Add";
import Edit from "./components/Edit/Edit";
import Protected from "./components/Protected/Protected";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <Box sx={{backgroundColor: "primary.main"}}>
        <Navigation />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="detail/:id" element= {<Detail/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element= {<Protected><Dashboard/></Protected>}/>
          <Route path="/add" element={<Protected><Add/></Protected>}/>
          <Route path=":id/edit" element={<Protected><Edit/></Protected>}/>
        </Routes>
      </Container>
      <Footer/>
      </Box>
    </div>
  );
}

export default App;

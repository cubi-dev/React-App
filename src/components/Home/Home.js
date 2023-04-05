import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { Component } from "react";
import List from "../List/List";
import callApi from "../Utils/APICaller";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    callApi("products", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  render() {
    var {products} = this.state
    console.log(products);
    return (
      <Container>
      <Box>
        <List F={products}/>
      </Box>
      </Container>
    )
  }
}
export default Home;

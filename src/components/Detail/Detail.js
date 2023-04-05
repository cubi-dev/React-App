import { async } from "@firebase/util";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const userName = useParams();
  const [newList, setNewList] = useState([]);
  console.log();

  async function getData() {
    await axios
      .get("https://63fc244c8ef914c555922d1a.mockapi.io/products/" + userName.id)
      .then((response) => response.data)
      .then((data) => {
        setNewList(data);
      });
    console.log(newList);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="row"  style={{ margin: "40px"}}>
        <div className="col-12">
          <div className="card" style={{ background: "#FCF9F3", padding: "40px"}}>
            <div>
              <img
                src={newList.image}
                style={{ width: "40em", height: "40em" }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h1 className="card-title" style={{fontWeight: "bold"}}>{newList.name}</h1>
              <h2 className="card-title"  style={{fontWeight: "bold", opacity: "0.6"}}>{newList.club}</h2>
              <p  style={{fontWeight: "bold", color: "#E00707"}}>Price: {newList.price}$</p>
              <hr></hr>
              <h6 style={{fontWeight: "bold"}}>Rating <p className="card-text">★{newList.rating}</p></h6>
              <h6 style={{fontWeight: "bold"}}>Category <p className="card-text">&#9835;{newList.category}</p></h6>
              {newList?.bestseller == true ? <h6 style={{fontWeight: "bold"}}>&#9829;Best Seller</h6> : <h6 style={{fontWeight: "bold"}}>Not Best Seller</h6>}
              <div style={{ left: "0" }} className="bottom-line2"></div>
              <h6 style={{fontWeight: "bold"}}>Description:</h6>
              <p className="card-text">{newList.description}</p>
              <div
                style={{ left: "0", marginBottom: "50px" }}
                className="bottom-line2"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

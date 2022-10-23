import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../components/about/Dropdown";
import Information from "../components/logement/Information";
import Loader from "../components/Loader";
import "../styles/logement.css";
import { GetLogementById } from "../utils/webService";
import Carousel from "../components/logement/Carousel";

const House = () => {
  const { id } = useParams();
  const { data, isLoading } = GetLogementById("/logements.json", id);
  const logement = data;
  console.log(data);
  // House id
  console.log(id);
  //console.log(id);

  /*useEffect(() => {
    var responseClone; // 1
    fetch("http://localhost:3000/logements.json")
      .then(function (response) {
        responseClone = response.clone(); // 2
        return response.json();
      })
      .then(
        function (data) {
          // Do something with data
          console.log(data);
        },
        function (rejectionReason) {
          // 3
          console.log(
            "Error parsing JSON from response:",
            rejectionReason,
            responseClone
          ); // 4
          responseClone
            .text() // 5
            .then(function (bodyText) {
              console.log(
                "Received the following instead of valid JSON:",
                bodyText
              ); // 6
            });
        }
      );

    /*fetch("http://localhost:3000/logements.json", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //setHouseData(...data.filter((house) => house.id === id));
      })
      .catch((err) => console.log(err)); ici
  }, [id]);*/

  console.log(logement);
  console.log(logement.equipments);
  console.log(logement.description);

  return isLoading ? (
    <Loader />
  ) : (
    <main className="house-page">
      <div className="house-page-wrapper">
        <Carousel title={logement.title} imgList={logement.pictures} />
        <Information houseData={logement} />
        <section className="descriptions">
          <Dropdown title={"Description"} description={logement.description} />
          <Dropdown title={"Équipements"} description={logement.equipments} />
        </section>
      </div>
    </main>
  );
};
export default House;

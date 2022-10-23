import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.css";
import Banner from "../components/home/Banner";
import Thumb from "../components/home/Thumb";
import Loader from "../components/Loader";
import { GetAllLogement } from "../utils/webService";

const Home = () => {
  const { data, isLoading, error } = GetAllLogement(
    "http://localhost:3000/logements.json"
  );
  const logement = data;
  console.log(GetAllLogement("http://localhost:3000/logements.json"));
  /*useEffect(() => {
    /*var responseClone; // 1
    fetch("http://localhost:3000/logements.json")
      .then(function (response) {
        responseClone = response.clone(); // 2
        return response.json();
      })
      .then(
        function (data) {
          // Do something with data
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

    fetch("http://localhost:3000/logements.json", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHouseData(data);
      })
      .catch((err) => console.log(err)); ici
      
  }, []);*/
  if (error) {
    return <div>{error}</div>;
  }

  return isLoading ? (
    <Loader />
  ) : (
    <main className="home-page">
      <Banner />
      <section className="houses">
        {logement.map((location) => (
          <Link key={location.id} to={`logement/${location.id}`}>
            <Thumb
              imgURL={location.cover}
              imgALT={location.title}
              title={location.title}
            />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;

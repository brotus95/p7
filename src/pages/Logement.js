import React from "react";
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

import React from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import Information from "../../components/Information";
import Loader from "../../components/Loader";
import styles from "./Logement.module.css";
import { GetLogementById } from "../../utils/webService";
import Carousel from "../../components/Carousel";

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
  /*const logementEquipments = logement.equipments;
  console.log(logementEquipments);
  let equipmentString = logementEquipments.join("\n");
  console.log(equipmentString);
  function reducer(previousValue, currentValue, currentIndex) {
    return currentIndex == 0
      ? currentValue
      : previousValue + "\n" + currentValue;
  }
  console.log(logementEquipments.reduce(reducer));*/

  return isLoading ? (
    <Loader />
  ) : (
    <main className={styles["house-page"]}>
      <div className={styles["house-page-wrapper"]}>
        <Carousel title={logement.title} imgList={logement.pictures} />
        <Information houseData={logement} />
        <section className={styles.descriptions}>
          <Dropdown title={"Description"} description={logement.description} />
          <Dropdown title={"Équipements"} description={logement.equipments} />
        </section>
      </div>
    </main>
  );
};
export default House;

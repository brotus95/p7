//import react
import React from "react";
import { useParams } from "react-router-dom";

//import components
import Dropdown from "../../components/Dropdown";
import Information from "../../components/Information";
import Loader from "../../components/Loader";
import Carousel from "../../components/Carousel";

//import css & util
import styles from "./Logement.module.css";
import { GetLogementById } from "../../utils/webService";

const House = () => {
  //recupere id dans url
  const { id } = useParams();
  const { data, isLoading } = GetLogementById("/logements.json", id);
  const logement = data;

  //si erreur lors du fetch alors renvoie vers la page 404 grace a useNavigate
  //si temps de chargement alors affiche ecran de chargement
  //sinon affiche la page logement avec les informations
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

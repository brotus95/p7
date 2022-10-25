//import reac
import React from "react";
import { Link } from "react-router-dom";

//import components
import Banner from "../../components/Banner";
import Thumb from "../../components/Thumb";
import Loader from "../../components/Loader";

//import css & util
import styles from "./Home.module.css";
import { GetAllLogement } from "../../utils/webService";

const Home = () => {
  const { data, isLoading, error } = GetAllLogement(
    "http://localhost:3000/logements.json"
  );
  const logement = data;

  //renvoi une erreur si le fetch ne trouve pas de logements
  if (error) {
    return <div>{error}</div>;
  }

  //si temps de chargement alors on affiche l'écran de chargement
  //sinon on affiche la liste des logements
  //link permet de gérer la navigation avec le routeur. thumb est la card
  return isLoading ? (
    <Loader />
  ) : (
    <main className={styles["home-page"]}>
      <Banner />
      <section className={styles.houses}>
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

import React from "react";
import PropTypes from "prop-types";
import Tag from "../Tag";
import Rating from "../Rating";
import styles from "./Information.module.css";

const Information = ({ houseData }) => {
  const formattedHostName = houseData.host.name.replace(" ", "\n");
  return (
    <section className={styles.profile}>
      <div className={styles["profile-left"]}>
        <h1>{houseData.title}</h1>
        <div className={styles.location}>{houseData.location}</div>
        <div className={styles.tags}>
          {houseData.tags.map((tag, index) => (
            <Tag key={tag + index}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div className={styles["profile-right"]}>
        <div className={styles["name-and-picture"]}>
          <div className={styles["host-name"]}>{formattedHostName}</div>
          <img
            src={houseData.host.picture}
            alt={`Portrait de ${houseData.host.name}`}
          />
        </div>
        <Rating rating={houseData.rating} />
      </div>
    </section>
  );
};

Information.propTypes = {
  houseData: PropTypes.object,
};

export default Information;

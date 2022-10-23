import React from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";
import Notation from "./Notation";
import "../../styles/information.css";

const Information = ({ houseData }) => {
  const formattedHostName = houseData.host.name.replace(" ", "\n");
  return (
    <section className="profile">
      <div className="profile-left">
        <h1>{houseData.title}</h1>
        <div className="location">{houseData.location}</div>
        <div className="tags">
          {houseData.tags.map((tag, index) => (
            <Tag key={tag + index}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div className="profile-right">
        <div className="name-and-picture">
          <div className="host-name">{formattedHostName}</div>
          <img
            src={houseData.host.picture}
            alt={`Portrait de ${houseData.host.name}`}
          />
        </div>
        <Notation rating={houseData.rating} />
      </div>
    </section>
  );
};

Information.propTypes = {
  houseData: PropTypes.object,
};

export default Information;

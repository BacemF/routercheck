import React from "react";
import { useParams } from "react-router-dom";
import Iframe from "react-iframe";

const ObjectMovie = ({ list }) => {
  const { id } = useParams();
  console.log(id);
  const item = list.find((el) => el.id == id);
  console.log(item)
  return (
    <div>
      <iframe
        width="942"
        height="530"
        src={item.trailer}
        title="El Castro - Zandyeni ١٠ ( Hez 3younek 𓂀)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>{}</h3>
    </div>
  );
};

export default ObjectMovie;

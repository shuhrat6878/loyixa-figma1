import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, img, title, sub_title = '', icon = '' }) => {
  if (sub_title && icon) {
    return (
      <Link to={`/newbook/${id}`}>
        <div>
          <img className="w-[239px] h-[336px]" src={img} alt="img" />
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="font-normal text-sm">{sub_title}</p>
          <img src={icon} alt="icon" />
        </div>
      </Link>
    );
  }
  return (
    <div>
      <img className="w-[190px] h-[267px]" src={img} alt="img" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
};



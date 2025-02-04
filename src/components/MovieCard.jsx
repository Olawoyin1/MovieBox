import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const MovieCard = ({ title, image, top }) => {
  return (
    <>
      <Link to="/details">
        <div className="movie-card">
          <img className="moviecard-img" src={image} alt="" />
          <div className="title mt-2 d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column">
              {top && <span className="badge bg-danger">Top 10 In</span>}
              <small>{title}</small>
            </div>
            <button className="">
              <IoIosArrowRoundForward size={20} />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;

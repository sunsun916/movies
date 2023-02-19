import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";
import "../index.css";

function MovieDetail() {
  const { title, overview } = useParams();
  const { state } = useLocation();

  return (
    <div className="page-container">
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "300px", height: "450px" }}
          src={IMG_BASE_URL + state.poster_path}
          alt="영화 포스터 이미지"
        />

        <div>
          <div style={{ fontSize: "32px", paddingLeft: "25px", color: "#fff" }}>
            {title}
          </div>
        </div>

        <div>
          <div className="overview-text">
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

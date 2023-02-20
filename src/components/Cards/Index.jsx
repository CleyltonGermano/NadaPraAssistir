import React from "react";
import "./styles.css";

export function MovieCard({ title, image_url, release_date }) {
  return (
    <div class="center">
      <div class="property-card">
        <a href="#">
          <img class="property-image" src={image_url} alt="Poster"/>
        </a>
        <div class="property-description">
          <h5>{title}</h5>
          <p>
            {release_date}
          </p>
        </div>
        <a href="#">
          <div class="property-social-icons"></div>
        </a>
      </div>
    </div>
  );
}

import React from "react";
import "./styles.css";
// Arthur

export function MovieCard({ title, description, image_url }) {
  return (
    <div class="center">
      <div class="property-card">
        <a href="#">
          <img class="property-image" src={image_url} alt="Poster"/>
        </a>
        <div class="property-description">
          <h5>{title}</h5>
          <p>
            {description}
          </p>
        </div>
        <a href="#">
          <div class="property-social-icons"></div>
        </a>
      </div>
    </div>
  );
}

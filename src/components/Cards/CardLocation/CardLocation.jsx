import React from "react";
import './CardLocation.css'

const CardLocation = ({ location }) => {
  return (
    <div class="card">
      <div class="content">
        <div class="back">
          <div class="back-content">
            <strong>{location.name}</strong>
          </div>
        </div>
        <div class="front">
          <div class="img">
            <div class="circle"></div>
            <div class="circle" id="right"></div>
            <div class="circle" id="bottom"></div>
          </div>

          <div class="front-content">
            <small class="badge">{location.id}</small>
            <div class="description flex flex-col items-center justify-center text-xl">
              <div class="title w-full flex items-center justify-center">
                <p class="title flex flex-row justify-center items-center">
                  <strong>Type: {location.type}</strong>
                </p>
              </div>
              <p class="card-footer">Dimension: {location.dimension}g</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLocation;

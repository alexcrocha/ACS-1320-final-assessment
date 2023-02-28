import React from "react";
import "./Band.css";
import BandStyle from "./BandStyle";
import Like from "./Like";

function Band({ band }) {
  return (
    <div className="band">
      <h2>{band.band_name}</h2>
      <p><strong>Origin</strong> {band.origin}</p>
      <p><strong>Formed</strong> {band.formed}</p>
      <p><strong>Fans</strong> {(band.fans * 1000).toLocaleString('en')}</p>
      <p><strong>Split</strong> {band.split}</p>
      <p><strong>Styles</strong><BandStyle styles={band.style.split(',')} /></p>


      {band.split === '-' ? < Like /> : null}
    </div>
  );
}

export default Band;
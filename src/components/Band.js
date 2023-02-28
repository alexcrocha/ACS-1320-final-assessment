import React from "react";
import "./Band.css";
import BandStyle from "./BandStyle";
import Like from "./Like";

function Band({ band }) {
  return (
    <div className="band">
      <h3>{band.band_name}</h3>
      <p>Origin {band.origin}</p>
      <p>Formed {band.formed}</p>
      <p>Fans {(band.fans * 1000).toLocaleString('en')}</p>
      <p>Split {band.split}</p>
      <BandStyle styles={band.style.split(',')} />
      {band.split === '-' ? < Like /> : null}
    </div>
  );
}

export default Band;
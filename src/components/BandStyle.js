import React from "react";
import "./BandStyle.css";

function BandStyle({ styles }) {
  return (
    <div className="bandstyles">
      <ul>
        {styles.map((style) => (
          <li>- {style}</li>
        ))}
      </ul>
    </div>
  );
}

export default BandStyle;
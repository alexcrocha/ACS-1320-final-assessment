import React, { useEffect, useState } from "react";
import "./Bands.css";
import bands from "../data/metal.json";
import Band from "./Band";
import Search from "./Search";

function Bands() {
  const [searchInput, setSearchInput] = useState("");

  let filteredBands = bands;

  if (searchInput !== "") {
    filteredBands = bands.filter((band) =>
      band.band_name.toLowerCase().includes(searchInput.toLowerCase())
      || band.origin.toLowerCase().includes(searchInput.toLowerCase())
      || band.formed.toLowerCase().includes(searchInput.toLowerCase())
      || band.style.toLowerCase().includes(searchInput.toLowerCase()))
      .map((band) => band);
  }

  return (
    <>
      <header >
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </header>
      <main className="bands">
        {filteredBands.map((band) => (
          <Band key={band.ID} band={band} />
        ))}
      </main>
    </>
  );
}

export default Bands;
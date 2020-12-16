import React from "react";
import Rate from "../Rate";
function Filter({ setTextSerach, setSearchRate, rating }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", width: "30%" }}
    >
      <input
        placeholder="serached movie"
        onChange={(e) => setTextSerach(e.target.value)}
      />
      <Rate setSearchRate={setSearchRate} rating={rating} />
    </div>
  );
}

export default Filter;
import React, { useState } from "react";
import "./Like.css";

function Like() {
  const [likes, setLikes] = useState(0);
  return (
    <div className="like">
      <button onClick={() => { setLikes(likes + 1) }}>👍</button>
      <p>{likes}</p>
      <button onClick={() => { setLikes(likes - 1) }}>👎</button>
    </div>
  );
}

export default Like;
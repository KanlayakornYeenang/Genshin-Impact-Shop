import React from "react";
import { useLocation } from "react-router-dom";

const ShowPath = () => {
  let paths = useLocation().pathname.split("/").slice(1);
  return (
    <div className="path-wrapper">
      <a
        href="/"
        className="path"
        style={{ marginRight: "0.5vw", marginLeft: "5vw", color: "#adacaa" }}
      >
        Home
      </a>
      {paths.map((path, index) => (
        <div style={{ display: "flex" }}>
          <p style={{ cursor: "context-menu" }}>/</p>
          <a
            href={
              "/" +
              paths
                .slice(0, index + 1)
                .slice(0)
                .join("/")
            }
            className="path"
            style={{ color: "#adacaa" }}
          >
            {path.split("_").map((path) => (
              <p className="path-section">
                {path[0].toUpperCase()}
                {path.slice(1)}
              </p>
            ))}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ShowPath;

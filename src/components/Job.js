import React from "react";
import "./components.css";

export default function Job(prop) {
  const { title, company } = prop.data;

  return (
    <div className="job">
      <p>{title}</p>
      <p>{company}</p>
    </div>
  );
}

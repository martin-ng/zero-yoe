import React from "react";
import "./components.css";

export default function Job(prop) {
  const {
    company,
    company_logo,
    company_url,
    created_at,
    description,
    how_to_apply,
    id,
    location,
    title,
    type,
    url,
  } = prop.data;

  return (
    <div className="job">
      <div>
        <h2>{title}</h2>
        <h2>{company}</h2>
        <h3>{location}</h3>
      </div>
      <div>{created_at.split(" ").slice(0, 3).join(" ")}</div>
    </div>
  );
}

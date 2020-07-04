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
  // console.log("MODAL", ModalCard);
  return (
    <div className="job">
      <div className="job-left">
        <h2>{title}</h2>
        <h2>{company}</h2>
        <h3>{location}</h3>
      </div>
      <div className="job-right">
        <div>{created_at.split(" ").slice(0, 3).join(" ")}</div>
        <div>
          <button>Open Job</button>
        </div>
      </div>
    </div>
  );
}

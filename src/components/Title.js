import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center title-text text-center">
        <h1 className="text-capitalize font-weight-bold">{name}</h1>
        <h1>
          <strong className="text-red">{title}</strong>
        </h1>
      </div>
    </div>
  );
}

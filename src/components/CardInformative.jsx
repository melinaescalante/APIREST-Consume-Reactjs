import React from "react";


function CardInformative({ name, description, country}) {
  return (
    <div className="p-2 m-2 border rounded-lg border-cyan-700 ">
      <h4 className="font-medium text-xl  m-3">{name}</h4>
      <p className="text-start"><strong>Descripción:</strong> {description}</p>
      <p className="text-start"><strong>País de origen:</strong> {country}</p>

    </div>
  );
}
export default CardInformative;

import React from "react";
import MediaCard from "./MediaCard";

export default function ResultSearch(props) {
  return (
    <div>
      <div className="mt-3 row p-3">
        {props.data.map((element, index) => (
          <div className="col mt-2" key={index}>
            <MediaCard
              title="mdichkou"
              poids={element.poids}
              type={element.type}
              prix={element.prix}
              quantite={element.quantite}
              livraison={element.livraison}
              ville={element.ville}
              vues={element.vues}
              enchere={element.enchere}
              id={element.id}
              images={element.images}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

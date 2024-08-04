import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";


function Info() {
 

  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        {/* <h3 className="info-title">
          <span>La Valeur du Don de Sang</span>
        </h3> */}
        <h2 className="p2" >"Le don de sang est un acte d'amour qui ne coûte rien mais qui donne tout."</h2>
        <p className="info-description">
        "*******Albert Schweitzer, médecin et prix Nobel de la paix*******
        </p>
       </div>
       <div className="info-cards-content">
        <InformationCard 
          title=" Sauver des Vies"
          // description="Le don de sang est vital pour les patients en urgence, comme ceux victimes d'acidents ou de chirurgies majeures. Un seul don peut aider jusqu'à trois personnes en fournissant les composants nécessaires comme les globules rouges, les plaquettes et le plasma."
          icon={faTruckMedical}
        />

        <InformationCard 
          title="Soutien aux Malades Chroniques"
          // description="Les patients atteints de maladies chroniques comme la leucémie ont besoin de transfusions régulières pour leur qualité de vie. Votre don les aide à continuer leur traitement et à vivre plus longtemps."
          icon={faHeartPulse}
        />

        <InformationCard 
          title=" Réponse aux Situations d'Urgence"
          // description="En cas de catastrophes naturelles ou de crises sanitaires, les besoins en sang augmentent rapidement. Les dons réguliers garantissent que les réserves de sang sont suffisantes pour répondre efficacement aux situations d'urgence et sauver des vies."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;

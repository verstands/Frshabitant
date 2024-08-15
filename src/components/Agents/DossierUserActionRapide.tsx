import React from "react";
import { FaClock } from "react-icons/fa";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";

interface DetailProspectProps {
  datadata: ProspectInterface;
}

const DossierUserActionRapide: React.FC<DetailProspectProps> = ({ datadata }) => {
  return (
    <div className="border-white  bg-white p-4 rounded-[10px] shadow">
      <h2 className="font-bold">Actions rapides</h2>
      <br />
      <hr />
      <br />
      <div className="inline-block">
        <div className="flex items-center">
          <div className="bg-[#56c3ee] rounded-l-[10px] size-40  flex items-center">
            <FaClock className="text-white" />
          </div>
          <div className="bg-[#d1e6dd] rounded-r-[10px] size-40 w-full p-4 flex-grow">
            <p className="text-[#1d59cc]">
              <strong>Help #1 </strong>Ces boutons permettent de changer le
              statut du dossier en 1 clic
            </p>
            <p className="text-[#1d59cc]">
              <strong>Help #2 </strong>Ex : "Pre-visité" : Change le statut en
              "Pre-visite", et vous demande la date de pre-visite
              automatiquement
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-6 flex gap-1 items-center">
        <button className="bg-orange-500 rounded-[7px] p-2 text-white" title="Non repondu pas">
          NRP
        </button>
        <button
          className="bg-gray-800 rounded-[7px] p-2 text-white"
          title="A retraiter"
        >
          A rétraiter
        </button>
        <button
          className="bg-green-500 rounded-[7px] p-2 text-white"
          title="Pré-visité"
        >
          Pré-visité
        </button>
        <button
          className="bg-red-500 rounded-[7px] p-2 text-white"
          title="Non valide"
        >
          Non valide
        </button>
      </div>
    </div>
  );
};

export default DossierUserActionRapide;

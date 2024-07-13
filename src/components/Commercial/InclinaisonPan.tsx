import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const InclinaisonPan: React.FC = () => {
  const [inclinaison, setInclinaison] = useState<number>(45); // Définir la valeur initiale de l'inclinaison

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInclinaison(parseInt(e.target.value)); // Mettre à jour la valeur de l'inclinaison lors du changement de la plage
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-96 bg-white shadow-md rounded-md p-6">
        <div className="flex items-center justify-between">
          <div>0°</div>
          <input
            type="range"
            id="inclinaison"
            name="inclinaison"
            min="0"
            max="70"
            step="1"
            value={inclinaison}
            onChange={handleChange}
            className="w-full appearance-none bg-gray-200 h-2 rounded-lg outline-none"
          />
          <div>70°</div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-[#333e57]" />
            <span>{inclinaison}°</span> {/* Afficher la valeur de l'inclinaison */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InclinaisonPan;

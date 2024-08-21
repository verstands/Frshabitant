import { useEffect, useState } from "react";
import { FonctionInterface } from "../../Interfaces/FonctionInterface";
import { CampagneInterface } from "../../Interfaces/CampagneInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import FonctionService from "../../Services/Fonction.service";
import CampagneService from "../../Services/Campagne.service";
import Select from 'react-select';

const RoleModelEmail = ({ formData, handleForm5Change }) => {
  const [fonction, setFonction] = useState<FonctionInterface[] | null>(null);
  const [campagne, setCampagne] = useState<CampagneInterface[] | null>(null);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const serviceFonction = new FonctionService(config);
  const serviceCampagne = new CampagneService(config);

  const getCampagne = async () => {
    try {
      const response = await serviceCampagne.getCampagne();
      setCampagne(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getFonction = async () => {
    try {
      const response = await serviceFonction.getFonction();
      setFonction(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCampagne();
    getFonction();
  }, []);

  const handleChangeCampagne = selectedOption => {
    handleForm5Change("selectedCampagne", selectedOption);
  };

  const handleChangeFonction = selectedOption => {
    handleForm5Change("selectedFonction", selectedOption);
  };

  const campagneOptions = campagne?.map((vh) => ({
    label: vh.titre,
    value: vh.id,
  })) || [];

  const fonctionOptions = fonction?.map((vh) => ({
    label: vh.initule,
    value: vh.id,
  })) || [];

  return (
    <>
      <div className="border-white bg-white p-4 rounded-[10px] shadow">
        <h2 className="font-bold">Rôle et campagne</h2>

        <div className="w-full mb-6">
          <div className="border-b border-gray-200 pb-2 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="-mb-px flex gap-3" aria-label="Tabs">
                {/* Les éléments de navigation peuvent être ajoutés ici */}
              </nav>
            </div>
          </div>
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Rôle : <span className="text-red-500">*</span>
          </label>
          <Select
            id="campagne"
            options={fonctionOptions}
            onChange={handleChangeFonction}
            value={fonctionOptions.find(option => option.value === formData.selectedFonction)}
          />

          <label
            htmlFor="campagne"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Campagne : <span className="text-red-500">*</span>
          </label>
          <Select
            id="campagne"
            options={campagneOptions}
            onChange={handleChangeCampagne}
            value={campagneOptions.find(option => option.value === formData.selectedCampagne)}
          />
        </div>
      </div>
    </>
  );
};

export default RoleModelEmail;

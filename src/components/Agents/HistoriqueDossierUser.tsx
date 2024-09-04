import React, { useEffect, useState } from "react";
import { HistoriqueAfficheInterface } from "../../Interfaces/HistoriqueAfficheInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import HistoriqueAfficheService from "../../Services/HistoriqueAffiche.service";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import { UserInterface } from "../../Interfaces/UserInterface";
import dateFormat from 'dateformat';


interface DetailProspectProps {
  datadata: ProspectInterface;
}

const HistoriqueDossierUser: React.FC<DetailProspectProps> = ({ datadata }) => {
  const [historique, setHistorique] = useState<HistoriqueAfficheInterface[] | null>(null);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "[]"
  );

  const serviceHistorique = new HistoriqueAfficheService(config);

  const getHistoriqueArchivage = async () => {
    try {
      if (datadata?.id && datadata.agentpospect?.id) {
        const response = await serviceHistorique.getHistoriqueAffiche(undefined, {
          prospect: datadata.id,
          user: String(user.id,)
        });
        setHistorique(response.data);
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (datadata) {
      getHistoriqueArchivage();
    }
  }, [datadata]);

  return (
    <div className="border-white bg-white p-4 rounded-[10px] shadow">
      <h2 className="font-bold">Historiques</h2>

      <div className="w-full mb-6">
        <div className="border-b border-gray-200 pb-2 mb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex gap-3" aria-label="Tabs">
              {/* Les éléments de navigation peuvent être ajoutés ici */}
            </nav>
          </div>
        </div>
        {historique?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 justify-center border border-gray-300 p-2 rounded"
          >
            <h1 className="font-bold">
             {item.action}
            </h1>
            <span>{dateFormat(item.createdA, "d-mm-yyyy: HH:MM:ss")}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoriqueDossierUser;

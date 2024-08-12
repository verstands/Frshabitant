import React, { useEffect, useState } from "react";
import ScriptService from "../../Services/Script.service";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { ScriptInterface } from "../../Interfaces/ScriptInterface";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import Spinner from "../Spinner";
import ComplementDiscour from "./ComplementDiscour";

interface DetailProspectProps {
  datadata: ProspectInterface;
}

const Discours: React.FC<DetailProspectProps> = ({ datadata }) => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);
  const [data, setData] = useState<ScriptInterface[] | null>(null);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const serviceScript = new ScriptService(config);

  const getTypeProduit = async () => {
    try {
      const response = await serviceScript.getScriptByIdProduit(
        datadata.id_produit
      );
      setData(response);

      // Définir l'onglet actif sur le premier élément si des données sont disponibles
      if (response && response.length > 0) {
        setActiveSubTab(response[0].titre); // Définit le sous-onglet actif par défaut
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTypeProduit();
  }, [datadata.id_produit]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSubTabClick = (subTab: string) => {
    setActiveSubTab(subTab);
  };

  const renderContent = () => {
    if (!data) {
      return <Spinner />;
    }
    const activeData = data.find(
      (d) => d.titre.toLowerCase() === activeSubTab?.toLowerCase()
    );
    if (!activeData) {
      return <div></div>;
    }
    return <div dangerouslySetInnerHTML={{ __html: activeData.contenue }} />;
  };

  return (
    <div className="border-white bg-white p-4 rounded-[10px] shadow">
      <h2 className="font-bold">Discours</h2>
      <p className="text-gray-500">
        Utiliser ce discours pour renforcer votre argumentation lors de votre
        appel
      </p>
      <br />
      <div className="w-full">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-2" aria-label="Tabs">
            <button
              onClick={() => handleTabClick("tab1")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                activeTab === "tab1"
                  ? "text-black border-2 p-2 mt-2 border-blue-500 rounded-t-[15px]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Principal
            </button>
            <button
              onClick={() => handleTabClick("tab2")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                activeTab === "tab2"
                  ? "text-black border-2 p-2 mt-2 border-blue-500 rounded-t-[15px]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Complement
            </button>
          </nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
            {activeTab === "tab1" && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="-mb-px flex gap-3" aria-label="Sub Tabs">
                  {data?.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSubTabClick(item.titre)}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                        activeSubTab === item.titre
                          ? "border-indigo-500 text-indigo-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {item.titre}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
        {activeTab === "tab1" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 h-96 overflow-y-scroll">
            {renderContent()}
          </div>
        )}
        {activeTab === "tab2" && <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 h-96 overflow-y-scroll">  
          <ComplementDiscour />
          </div>}
      </div>
    </div>
  );
};

export default Discours;

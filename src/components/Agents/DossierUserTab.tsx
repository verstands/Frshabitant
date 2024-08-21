import React, { useState } from "react";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import DetailProspect from "./DetailProspect";
import ComplementDiscour from "./ComplementDiscour";

type Tab = "tab1" | "tab2" | "tab3";
interface DetailProspectProps {
  data: ProspectInterface;
}

const DossierUserTab : React.FC<DetailProspectProps> = ({ data })=> {
  const [activeTab, setActiveTab] = useState<Tab>("tab1");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const archives = [
    {
      id: 1,
      name: "Archive 1",
      description: "This is the first archive.",
    },
    {
      id: 2,
      name: "Archive 2",
      description: "This is the second archive.",
    },
    {
      id: 3,
      name: "Archive 3",
      description: "This is the third archive.",
    },
  ];

  return (
    <div className="border-white  bg-white p-4 rounded-[10px] shadow">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between pt-3">
            <div>
              <h1 className="font-bold">Dossier n°444</h1>
              <p className="text-gray-500">Détail de votre dossier.</p>
            </div>
          </div>
          <br />
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
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        {activeTab === "tab1" && 
             data && <DetailProspect data={data} />
        }
        {activeTab === "tab2" && <ComplementDiscour />}
      </div>
    </div>
  );
};

// Placeholder for TaxationNote component


export default DossierUserTab;

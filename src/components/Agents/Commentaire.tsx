import React, { useState } from "react";
import { FaClock } from "react-icons/fa";

type Tab = "tab1" | "tab2" | "tab3" | "tab4" | "tab5" | "tab6";

const Commentaire: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("tab1");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="border-white  bg-white p-4 rounded-[10px] shadow">
      <div className="w-full">
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex gap-12" aria-label="Tabs">
              <button
                onClick={() => handleTabClick("tab1")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab1"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Actions rapides
              </button>
              <button
                onClick={() => handleTabClick("tab2")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab2"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Historique
              </button>
              <button
                onClick={() => handleTabClick("tab3")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab3"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Enregistrement
              </button>
              <button
                onClick={() => handleTabClick("tab4")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab4"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Appels
              </button>
              <button
                onClick={() => handleTabClick("tab5")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab5"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Commentaire
              </button>
              <button
                onClick={() => handleTabClick("tab6")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab6"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Calendrier
              </button>
            </nav>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
          {activeTab === "tab1" && <div>
            <div className='flex items-center'>
                        <div className='bg-[#56c3ee] rounded-l-[10px] p-7 flex items-center flex-grow-0'>
                            <FaClock className='text-white' />
                        </div>
                        <div className='bg-[#d1e6dd] rounded-r-[10px] p-3 flex-grow'>
                            <p className='text-[#1d59cc]'><strong>Help #1 </strong>Ces boutons permettent de changer le statut du prospect en 1 clic</p>
                            <p className='text-[#1d59cc]'><strong>Help #2 </strong>Ex : "RDV" : Change le statut en "RDV", crée un lead, puis passe au prospect suivant </p>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-6 flex gap-1 items-center'>
                        <button className='bg-[#f2c231] rounded-[10px] p-2 '>NRP</button>
                        <button className='bg-[#20b669] rounded-[10px] p-2 text-white'>RDV</button>
                        <button className='bg-orange-300 rounded-[10px] p-2 text-white'>A rappeler</button>
                        <button className='bg-[#eb5c56] rounded-[10px] p-2 text-white'>Non valide</button>
                    </div>
          </div>}
          {activeTab === "tab2" && <div>Contenu du Tab 2</div>}
          {activeTab === "tab3" && <div>Contenu du Tab 3</div>}
          {activeTab === "tab4" && <div>Contenu du Tab 4</div>}
          {activeTab === "tab5" && <div>Contenu du Tab 5</div>}
          {activeTab === "tab6" && <div>Contenu du Tab 6</div>}
        </div>
      </div>
    </div>
  );
};

export default Commentaire;

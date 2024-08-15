import React, { useState } from "react";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import DetailProspect from "./DetailProspect";

type Tab = "tab1" | "tab2" | "tab3";
interface DetailProspectProps {
  data: ProspectInterface;
}

const PieceJointUser: React.FC<DetailProspectProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<Tab>("tab1");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="border-white  bg-white p-4 rounded-[10px] shadow">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr />
          <nav className="-mb-px flex gap-2" aria-label="Tabs">
            <button
              onClick={() => handleTabClick("tab1")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                activeTab === "tab1"
                  ? "text-black border-2 p-2 mt-2 border-blue-500 rounded-t-[15px]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Visualier
            </button>
            <button
              onClick={() => handleTabClick("tab2")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                activeTab === "tab2"
                  ? "text-black border-2 p-2 mt-2 border-blue-500 rounded-t-[15px]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Ajouter
            </button>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        {activeTab === "tab1" && data && <DetailProspect data={data} />}
        {activeTab === "tab2" && (
          <div>
            <div className="flex items-center justify-center bg-white">
              <form className="bg-white-900 p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-300"
                    htmlFor="multiple_files"
                  >
                    Chissisez un fichier
                  </label>
                  <input
                    className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400 file:bg-gray-800 file:text-white file:border-gray-600 file:rounded-lg file:px-4 file:py-2"
                    id="multiple_files"
                    type="file"
                    multiple
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Soumettre
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Placeholder for TaxationNote component

export default PieceJointUser;

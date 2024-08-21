import React, { useEffect, useState } from "react";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import PieceJointService from "../../Services/PieceJoint.service";
import { PieceJointInterface } from "../../Interfaces/PieceJoint";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { toast } from "react-toastify";
import { FaFile, FaFilePdf, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type Tab = "tab1" | "tab2" | "tab3";

interface DetailProspectProps {
  data: ProspectInterface;
}

const PieceJointUser: React.FC<DetailProspectProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<Tab>("tab1");
  const [fileList, setFileList] = useState<FileList | null>(null);
  const [datapiecejoint, setdatapiecejoint] = useState<PieceJointInterface[] | null>(null);

  const [datainput, setdataInput] = useState<PieceJointInterface>({
    id_user: data.id_user,
    id_prospect: String(data.id),
    file: "",
    date: new Date().toISOString().split("T")[0],
    status: true,
  });

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const servicepieceJoint = new PieceJointService(config);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  };

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!fileList) {
      toast.error("Veuillez sélectionner un fichier.");
      return;
    }
  
    const formData = new FormData();
    Object.keys(datainput).forEach((key) => {
      formData.append(key, datainput[key]);
    });
    for (const file of fileList) {
      formData.append("file", file);
    }
  
    try {
      const response = await servicepieceJoint.postPieceJoint(formData);
      getpieceJoint()
      toast.success("Fichier envoyé avec succès:");
    } catch (error: unknown) {
      console.error("Erreur lors de l'envoi du fichier:", error);
    }
  };

  const getpieceJoint = async () => {
    try {
      const response = await servicepieceJoint.getPieceJoint();
      setdatapiecejoint(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    

    getpieceJoint();
  }, []);

  const getFileType = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const pdfExtensions = ['pdf'];

    if (imageExtensions.includes(extension)) {
      return 'image';
    } else if (pdfExtensions.includes(extension)) {
      return 'pdf';
    } else {
      return 'other';
    }
  };
  return (
    <div className="border-white bg-white p-4 rounded-[10px] shadow">
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
              Visualiser
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
      <div className="grid grid-cols-4 gap-4">
      {activeTab === "tab1" && datapiecejoint?.map((d) => (
        <div key={d.id} className="relative group bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 flex flex-col items-center">
            {(() => {
              const fileType = getFileType(d.fileUrl);

              if (fileType === 'image') {
                return (
                  <Link to={d.fileUrl} target="_blank" rel="noopener noreferrer">
                    <img src={d.fileUrl} alt="Image" className="w-32 h-32 object-cover rounded-md" />
                  </Link>
                );
              } else if (fileType === 'pdf') {
                return (
                  <Link to={d.fileUrl} target="_blank" rel="noopener noreferrer">
                    <FaFilePdf size={100} className="text-red-600" />
                  </Link>
                );
              } else {
                return (
                  <Link to={d.fileUrl} target="_blank" rel="noopener noreferrer">
                    <FaFile size={100} className="text-gray-600" />
                  </Link>
                );
              }
            })()}
          </div>

          {/* Bouton de suppression */}
          <button
            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
        {activeTab === "tab2" && (
          <div>
            <div className="flex items-center justify-center bg-white">
              <form
                onSubmit={handleSubmit}
                className="bg-white-900 p-6 rounded-lg shadow-lg w-full max-w-md"
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-700"
                    htmlFor="multiple_files"
                  >
                    Choisissez un fichier
                  </label>
                  <input
                    className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400 file:bg-gray-800 file:text-white file:border-gray-600 file:rounded-lg file:px-4 file:py-2"
                    id="multiple_files"
                    type="file"
                    onChange={handleFileChange}
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

export default PieceJointUser;

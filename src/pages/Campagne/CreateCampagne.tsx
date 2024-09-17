import { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import useHasModule from "../../components/Agents/useHasModule";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { FonctionInterface } from "../../Interfaces/FonctionInterface";
import FonctionService from "../../Services/Fonction.service";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { toast } from "react-toastify";

const CreateCampagne = () => {
  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [titre, setTitre] = useState<string>("");
  const [lead, setLead] = useState<string>("");
  const [excelData, setExcelData] = useState<any[][]>([]);
  const [fonction, setFonction] = useState<FonctionInterface[] | null>(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const navigate = useNavigate();

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const RoleUserServices = new FonctionService(config);

  const getFonciton = async () => {
    try {
      const response = await RoleUserServices.getFonction();
      const formattedFonctions = response.data.map(
        (fonction: FonctionInterface) => ({
          value: fonction.id,
          label: fonction.initule,
        })
      );
      setFonction(formattedFonctions);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFonciton();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFile(files && files[0]);
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitre(event.target.value);
  };

  const handleTitleChangeLead = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLead(event.target.value);
  };

  const handleCreateClick = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const workbook = XLSX.read(reader.result, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data: never[] = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
        });
        if (selectedOptions.length < 0) {
          toast.error("Champs role vide");
        } else {
          const filteredData = data.filter((row: any[]) => row.length > 0);
          setExcelData(filteredData);
          sessionStorage.setItem("titre", titre);
          sessionStorage.setItem("lead", lead);
          sessionStorage.setItem("dataexcel", JSON.stringify(filteredData));
          navigate("/mapping-campagne");
        }
      };
      reader.readAsBinaryString(selectedFile);
    } else {
      console.log("No file selected");
    }
  };

  useEffect(() => {
    console.log("excelData:", excelData);
  }, [excelData]);

  const hasModule = useHasModule("CREER_CAMPAGNE");

  if (!hasModule) {
    return (
      <div className="font-bold">
        <center>
          {" "}
          <br /> Accès refusé
        </center>
      </div>
    );
  }

  const handleSelectChange = (newValue) => {
    setSelectedOptions(newValue);
    if (newValue.length > 0) {
      sessionStorage.setItem("userCampagne", JSON.stringify(newValue));
    } else {
      sessionStorage.removeItem("userCampagne");
    }
  };

  return (
    <>
      <Otbar title="Espace Campagne" />
      <div className="px-20">
        <div className="flex items-center p-2 justify-between">
          <div className="flex p-4">
            <h1 className="text-[#b3b4b6]">Campagnes / </h1>
            <h1 className="font-bold">Création</h1>
          </div>
        </div>
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <h2 className="font-bold text-[20px]">Nouvelle campagne</h2>
          <hr />
          <br />
          <button
            className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right"
            onClick={handleCreateClick}
          >
            Créer
          </button>
          <br />
          <div className="grid md:grid-cols-1 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Title
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleTitleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="information"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type
              </label>
              <select
                name="position"
                onChange={handleTitleChangeLead}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="lead">Lead</option>
                <option value="data">Data</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="file"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Importer un fichier (.xlsx)
              </label>

              <div className="relative">
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept=".xlsx"
                  onChange={handleFileChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16.992V4h16v12.992l-8 4-8-4z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="select"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Sélectionnez un ou plusieurs role
              </label>

              <CreatableSelect
                isMulti
                value={selectedOptions}
                onChange={handleSelectChange}
                options={fonction}
                placeholder="Sélectionner ou ajouter des éléments..."
                className="text-gray-900 dark:text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCampagne;

import Otbar from "../../components/Agents/Otbar";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import ProspectTable from "./ProspectTable";
import hasAccess from "../../components/hasAcess";
import Select from "react-select";
import { CampagneInterfce } from "../../Interfaces/CampagneInterface";
import { useEffect, useState } from "react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import CampagneService from "../../Services/Campagne.service";
import AgentService from "../../Services/Agent.service";
import { UserInterface } from "../../Interfaces/UserInterface";
import { TypeProduitInterface } from "../../Interfaces/TypeProduitInterface";
import TypeProduitService from "../../Services/TypeProduit.service";


const ViewProspect = () => {
  const [campagne, setCampagne] = useState<CampagneInterfce[] | null>(null);
  const [user, setUser] = useState<UserInterface[] | null>(null);
  const [typeproduit, settypeproduit] = useState<TypeProduitInterface[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  
  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const serviceCampgane = new CampagneService(config);
  const serviceUser = new AgentService(config);
  const serviceTypeProduit = new TypeProduitService(config);


  const getCampgane = async () => {
    try {
      const response = await serviceCampgane.getCampagne();
      setCampagne(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await serviceUser.getAgent();
      setUser(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getTypeProduit = async () => {
    try {
      const response = await serviceTypeProduit.getTypeProduit();
      settypeproduit(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCampgane();
    getUser();
    getTypeProduit();
  }, []);


  const handleChangeCampgne = (selectedOption: any) => {
    setSelectedUser(selectedOption);
    console.log("Campagne sélectionné:", selectedOption);
  };


  const campagneOptions =
    campagne?.map((vh) => ({
      label: vh.titre,
      value: vh.id,
    })) || [];

    const userOptions =
    user?.map((vh) => ({
      label: vh.prenom + " " + vh.nom,
      value: vh.id,
    })) || [];

    const typeProduitOptions =
    typeproduit?.map((vh) => ({
      label: vh.titre,
      value: vh.id,
    })) || [];

  return (
    <>
      <Otbar title="Espace prospect" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-4">
          <h1 className="text-[#b3b4b6]">Prospect / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
        {hasAccess("create") && (
          <Link to="/createProspect">
            <div className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right">
              <FaPlus className="bg-white  p-1 rounded-[50%] text-[#1e58c1]" />
              <p className=" text-white">Nouveau prospect</p>
            </div>
          </Link>
        )}
      </div>
      {hasAccess("read") && (
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          {hasAccess("print") && (
            <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right">
              Exporter ma rechreche
            </button>
          )}
          <br />
          <br />
          <div className="grid md:grid-cols-3 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Capamgne
              </label>
              <Select
                id="user-select"
                options={campagneOptions}
                onChange={handleChangeCampgne}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Utilisateur
              </label>
              <Select
                id="user-select"
                options={userOptions}
                onChange={handleChangeCampgne}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Status
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les status</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Produit
              </label>
              <Select
                id="user-select"
                options={typeProduitOptions}
                onChange={handleChangeCampgne}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Invalidité
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les invalidité</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                NPR superieur ou egale à:
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les provenances</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Affichage archivé
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Afficher uniquement les non archivés</option>
              </select>
            </div>
            <div></div>
            <div>
              <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right">
                Recherche
              </button>
            </div>
          </div>
          <br />
          <hr />
          <ProspectTable />
        </div>
      )}
    </>
  );
};

export default ViewProspect;

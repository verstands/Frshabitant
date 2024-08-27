import Otbar from "../../components/Agents/Otbar";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import DossierTable from "./DossierTable";
import { StatusInterface } from "../../Interfaces/Status.interface";
import { useEffect, useState } from "react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import StatuService from "../../Services/Statut.service";
import AgentService from "../../Services/Agent.service";
import { UserInterface } from "../../Interfaces/UserInterface";
import { InstallateurInterface } from "../../Interfaces/InstallateurInterface";
import InstallateurService from "../../Services/Installateur.service";
import { TypeProduitInterface } from "../../Interfaces/TypeProduitInterface";
import TypeProduitService from "../../Services/TypeProduit.service";
import { InvaliditeInterface } from "../../Interfaces/InvaliditeInterface";
import InvaliditeService from "../../Services/Invalidite.service";
import { ProvenanceInterface } from "../../Interfaces/ProvenanceInterface";
import ProvenanceService from "../../Services/Provenance.service";
import { ArchivageInterface } from "../../Interfaces/ArchivageInterface";
import ArchivageService from "../../Services/Archivage.service";
import hasAccess from "../../components/hasAcess";
import { CampagneInterfce } from "../../Interfaces/CampagneInterface";
import CampagneService from "../../Services/Campagne.service";
import Select from "react-select";


const Dossiers = () => {
  const [statut, setStatus] = useState<StatusInterface[] | null>(null);
  const [campagne, setCampagne] = useState<CampagneInterfce[] | null>(null);
  const [user, setUser] = useState<UserInterface[] | null>(null);
  const [typeproduit, settypeproduit] = useState<TypeProduitInterface[] | null>(null);
  const [installateur, setInstallateur] = useState<
    InstallateurInterface[] | null
  >(null);
  const [invalidite, setInvalidite] = useState<InvaliditeInterface[] | null>(
    null
  );
  const [provenance, setProvenance] = useState<ProvenanceInterface[] | null>(
    null
  );
  const [archivage, setArchivage] = useState<ArchivageInterface[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [dataExcel, setDatExcel] = useState([]); 

  const updateDossierData = (newData: any[]) => {
    setDatExcel(newData);
  };

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getStatut = async () => {
    try {
      const response = await getStatutService.getStatus();
      setStatus(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getInstallateur = async () => {
    try {
      const response = await installateurservice.getInstallateur();
      setInstallateur(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };


  const getIvalidite = async () => {
    try {
      const response = await invaliditeService.getInvalidite();
      setInvalidite(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getprovenance = async () => {
    try {
      const response = await provenanceService.getProvenance();
      setProvenance(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getarchivage = async () => {
    try {
      const response = await archivageService.getArchivage();
      setArchivage(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getStatutService = new StatuService(config);
  const agentService = new AgentService(config);
  const installateurservice = new InstallateurService(config);
  const invaliditeService = new InvaliditeService(config);
  const provenanceService = new ProvenanceService(config);
  const archivageService = new ArchivageService(config);
  const serviceCampgane = new CampagneService(config);
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
      const response = await agentService.getAgent();
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
    getStatut();
    getUser();
    getInstallateur();
    getTypeProduit();
    getIvalidite();
    getprovenance();
    getarchivage();
    getCampgane();
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

    const installateurOptions =
    installateur?.map((vh) => ({
      label: vh.nom,
      value: vh.id,
    })) || []; 

    const statusOptions =
    statut?.map((vh) => ({
      label: vh.nom,
      value: vh.id,
    })) || []; 

    const provenanceOptions =
    provenance?.map((vh) => ({
      label: vh.nom,
      value: vh.id,
    })) || [];

    const archivageOptions =
    archivage?.map((vh) => ({
      label: vh.nom,
      value: vh.id,
    })) || [];
    
    
    const exportToExcel = () => {
      import("xlsx").then((XLSX) => {
        
        const ws = XLSX.utils.json_to_sheet(dataExcel);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Données");
        XLSX.writeFile(wb, "Dossier.xlsx");
      });
    };

    



  return (
    <>
      <Otbar title="Espace Dossiers" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-4">
          <h1 className="text-[#b3b4b6]">Dossiers / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
        <Link to="/createdossier">
          {hasAccess("create") && (
            <div className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right">
              <FaPlus className="bg-white  p-1 rounded-[50%] text-[#1e58c1]" />
              <p className=" text-white">Nouveau dossier</p>
            </div>
          )}
        </Link>
      </div>
      {
        hasAccess("read") && (
          <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
        {hasAccess("print") && (
          <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right" onClick={exportToExcel}>
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
              Installateur
            </label>
            <Select
                id="user-select"
                options={installateurOptions}
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
            <Select
                id="user-select"
                options={statusOptions}
                onChange={handleChangeCampgne}
              />
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
              {invalidite?.map((ville) => (
                <option value={ville.id}>{ville.nom}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Provenance
            </label>
            <Select
                id="user-select"
                options={provenanceOptions}
                onChange={handleChangeCampgne}
              />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Affichage archivé
            </label>
            <Select
                id="user-select"
                options={archivageOptions}
                onChange={handleChangeCampgne}
              />
          </div>
          <div>
            <br />
            <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right">
              Recherche
            </button>
          </div>
        </div>
        <div className="py-4"></div>
        <hr />
        <div className="p-1">
          <DossierTable onUpdateDossierData={updateDossierData} />
        </div>
      </div>
        )
      }
    </>
  );
};

export default Dossiers;

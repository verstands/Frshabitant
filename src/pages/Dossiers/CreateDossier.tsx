import { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import { Link } from "react-router-dom";
import { StatusInterface } from "../../Interfaces/Status.interface";
import { UserInterface } from "../../Interfaces/UserInterface";
import { InstallateurInterface } from "../../Interfaces/InstallateurInterface";
import { TypeProduitInterface } from "../../Interfaces/TypeProduitInterface";
import { InvaliditeInterface } from "../../Interfaces/InvaliditeInterface";
import { ProvenanceInterface } from "../../Interfaces/ProvenanceInterface";
import { ArchivageInterface } from "../../Interfaces/ArchivageInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import StatuService from "../../Services/Statut.service";
import AgentService from "../../Services/Agent.service";
import InstallateurService from "../../Services/Installateur.service";
import TypeProduitService from "../../Services/TypeProduit.service";
import InvaliditeService from "../../Services/Invalidite.service";
import ProvenanceService from "../../Services/Provenance.service";
import ArchivageService from "../../Services/Archivage.service";

const CreateDossier = () => {
    const [statut, setStatus] = useState<StatusInterface[] | null>(null);
  const [agent, setAgent] = useState<UserInterface[] | null>(null);
  const [installateur, setInstallateur] = useState<InstallateurInterface[] | null>(null);
  const [typeproduit, setTypeProduit] = useState<TypeProduitInterface[] | null>(null);
  const [invalidite, setInvalidite] = useState<InvaliditeInterface[] | null>(null);
  const [provenance, setProvenance] = useState<ProvenanceInterface[] | null>(null);
  const [archivage, setArchivage] = useState<ArchivageInterface[] | null>(null);

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

  const getUser = async () => {
    try {
      const response = await agentService.getAgent();
      setAgent(response.data);
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

  const getTypeproduit = async () => {
    try {
      const response = await TypeproduitService.getTypeProduit();
      setTypeProduit(response.data);
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
  const TypeproduitService = new TypeProduitService(config);
  const invaliditeService = new InvaliditeService(config);
  const provenanceService = new ProvenanceService(config);
  const archivageService = new ArchivageService(config);

  useEffect(() => {
    getStatut();
    getUser();
    getInstallateur();
    getTypeproduit();
    getIvalidite();
    getprovenance();
    getarchivage();
  }, []);

  return (
    <>
      <Otbar title="Espace prospects" />
      <div className="px-16">
        <div className="flex">
          <h1 className="text-[#4c72c3]">
            <Link to="/dossiers">Dossier /</Link>{" "}
          </h1>
          <h1 className="font-bold"> Création</h1>
        </div>
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <h2 className="font-bold text-[20px]">Nouveau dossier</h2>
          <hr />
          <br />
          <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right">
            Créer
          </button>
          <br />
          <div className="grid md:grid-cols-3 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nom
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Prenom
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Telephone
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Telephone
              </label>
              <input
                type="number"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Utilisateur
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les utilisateurs</option>
                {agent?.map((ville) => (
                    <option value={ville.id}>{ville.nom}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Installateur
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les installateurs</option>
                {installateur?.map((ville) => (
                    <option value={ville.id}>{ville.nom}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Produit
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les produit</option>
                {typeproduit?.map((ville) => (
                    <option value={ville.id}>{ville.titre}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Statut
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les utilisateurs</option>
                {statut?.map((ville) => (
                    <option value={ville.id}>{ville.nom}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Invadilité
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les utilisateurs</option>
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
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les provenances</option>
                {provenance?.map((ville) => (
                    <option value={ville.id}>{ville.nom}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Archives
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Afficher uniquement les non archivés</option>
                {archivage?.map((ville) => (
                    <option value={ville.id}>{ville.nom}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateDossier;

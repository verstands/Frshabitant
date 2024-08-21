import { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import { Link, useNavigate } from "react-router-dom";
import TypechauffageService from "../../Services/TypeChauffage.service";
import TypeRevenuService from "../../Services/TypeRevenu.service";
import ProspectService from "../../Services/Prospect.service";
import CampagneService from "../../Services/Campagne.service";
import TypeProduitService from "../../Services/TypeProduit.service";
import { VilleInterface } from "../../Interfaces/VilleInterface";
import { TypeChauffageInterface } from "../../Interfaces/TypeChauffageInterface";
import { TypeRevenuInterface } from "../../Interfaces/TypeRevenuInterface";
import { CampagneInterfce } from "../../Interfaces/CampagneInterface";
import { TypeProduitInterface } from "../../Interfaces/TypeProduitInterface";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import { UserInterface } from "../../Interfaces/UserInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import VilleJson from "../../Json/cities.json";
import Select from "react-select";
import Spinner from "../../components/Spinner";

const CreateDossier = () => {
  const [ville, setVille] = useState<VilleInterface[] | null>(null);
  const [typechauffage, setTypechauffage] = useState<
    TypeChauffageInterface[] | null
  >(null);
  const [typerevenu, setTypeRevenu] = useState<TypeRevenuInterface[] | null>(
    null
  );
  const [campagne, setCampagne] = useState<CampagneInterfce[] | null>(null);
  const [typeproduit, setTypeProduit] = useState<TypeProduitInterface[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "[]"
  );
  const [prospect, setProspect] = useState<ProspectInterface>({
    nom: "",
    telephone: "",
    prenom: "l",
    email: "",
    adresse: "",
    ville: "0",
    codepostal: "",
    status: "1",
    surface: "",
    id_typechauffage: "",
    id_typerevenu: "",
    id_user: `${user.id}`,
    code: "0",
    id_campagne: "",
    typelead: "",
    id_produit: "",
    statusdossier: "0",
  });

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getVille = async () => {
    try {
      const response = await VilleJson;
      setVille(response.cities);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleChangeCampgne = (selectedOption: any) => {
    setSelectedUser(selectedOption);
    console.log("Campagne sélectionné:", selectedOption);
  };

  const getchauffageService = async () => {
    try {
      const response = await getTypechauffageService.getTypeChauffages();
      setTypechauffage(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getTypeRevenu = async () => {
    try {
      const response = await getTypeRevenuService.getTypeRevenu();
      setTypeRevenu(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getCampagne = async () => {
    try {
      const response = await serviceCampagne.getCampagne();
      setCampagne(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getTypeProduit = async () => {
    try {
      const response = await serviceTypeProduit.getTypeProduit();
      setTypeProduit(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProspect({ ...prospect, [name]: value });
  };

  const getTypechauffageService = new TypechauffageService(config);
  const getTypeRevenuService = new TypeRevenuService(config);
  const serviceProspect = new ProspectService(config);
  const serviceCampagne = new CampagneService(config);
  const serviceTypeProduit = new TypeProduitService(config);

  useEffect(() => {
    getchauffageService();
    getTypeRevenu();
    getCampagne();
    getTypeProduit();
    getVille();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      try {
        console.log(prospect);
        const response = await serviceProspect.postProspect(prospect);
         setLoading(false);
        navigate("/dossiers");
      } catch (error) {
        console.log("Error creating prospect:", error);
      }
    } catch (error: unknown) {
      console.log("Error creating prospect:", error);
    }
  };

  const villeOptions =
    ville?.map((vh) => ({
      label: vh.label,
      value: vh.label,
    })) || [];

  return (
    <>
      <Otbar title="Espace prospects" />
      <div className="">
        <div className="flex p-4">
          <h1 className="text-[#4c72c3]">
            <Link to="/prospect">Prospect /</Link>{" "}
          </h1>
          <h1 className="font-bold"> Création</h1>
        </div>
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <h2 className="font-bold text-[20px]">Nouveau dossier</h2>
          <form onSubmit={handleSubmit}>
            <hr />
            <br />
            {loading ? (
              <div className="float-right">
                <Spinner />
              </div>
            ) : (
              <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right">
                Créer
              </button>
            )}

            <br />
            <div className="grid md:grid-cols-3 gap-2">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Noms
                </label>
                <input
                  type="text"
                  name="nom"
                  id="email"
                  value={prospect.nom}
                  onChange={handleChange}
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
                  name="telephone"
                  id="email"
                  value={prospect.telephone}
                  onChange={handleChange}
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
                  value={prospect.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-2">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Adresse
                </label>
                <input
                  type="text"
                  name="adresse"
                  id="email"
                  value={prospect.adresse}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Villes
                </label>

                <Select
                  id="user-select"
                  options={villeOptions}
                  onChange={handleChangeCampgne}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Code Poastal
                </label>
                <input
                  type="text"
                  name="codepostal"
                  id="email"
                  value={prospect.codepostal}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-2">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Surface
                </label>
                <input
                  type="text"
                  name="surface"
                  id="email"
                  value={prospect.surface}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Type de chauffage
                </label>
                <select
                  name="id_typechauffage"
                  value={prospect.id_typechauffage}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id=""
                >
                  <option value="">selectioner le type de chauffage</option>
                  {typechauffage?.map((ville) => (
                    <option value={ville.intitule}>{ville.intitule}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Type de revenu
                </label>
                <select
                  name="id_typerevenu"
                  value={prospect.id_typerevenu}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id=""
                >
                  <option value="">selectioner le type de revenu</option>
                  {typerevenu?.map((ville) => (
                    <option value={ville.intitule}>{ville.intitule}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Campagne
                </label>
                <select
                  name="id_campagne"
                  value={prospect.id_campagne}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id=""
                >
                  <option value="">selectioner une campagne</option>
                  {campagne?.map((ville) => (
                    <option value={ville.id}>{ville.titre}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Type de produit
                </label>
                <select
                  name="id_produit"
                  value={prospect.id_produit}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id=""
                >
                  <option value="">selectioner le type de produit</option>
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
                  Type
                </label>
                <select
                  name="typelead"
                  value={prospect.typelead}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id=""
                >
                  <option value="">selectioner le type </option>
                  <option value="lead">leads </option>
                  <option value="data">data </option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateDossier;

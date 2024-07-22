import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {useNavigate } from "react-router-dom";
import { UserInterface } from "../../../Interfaces/UserInterface";
import { RepositoryConfigInterface } from "../../../Interfaces/RepositoryConfig.interface";
import AgentService from "../../../Services/Agent.service";
import Otbar from "../../../components/Agents/Otbar";
import FonctionService from "../../../Services/Fonction.service";
import { FonctionInterface } from "../../../Interfaces/FonctionInterface";
import Spinner from "../../../components/Spinner";

const Utilisateur = () => {
  const [agent, setAgent] = useState<UserInterface>({
    nom: "",
    prenom: "",
    email: "",
    statut: "0",
    mdp: "",
    id_fonction: "",
  });
  const navigate = useNavigate();
  const [rows, setRows] = useState([{ jour: "", debut: "", fin: "" }]);
  const [fonction, setFonction] = useState<FonctionInterface[] | null>(null);
  const [loading, setLoading] = useState(false);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const agntService = new AgentService(config);
  const serviceFonction = new FonctionService(config);

  const handleAddRow = () => {
    setRows([...rows, { jour: "", debut: "", fin: "" }]);
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    const newRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(newRows);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAgent({ ...agent, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await agntService.postAgent(agent);
    setLoading(false);
    navigate("/viewUser");
    try {
      setLoading(false);
    } catch (error: unknown) {
      console.error("Unexpected error:", error);
      setLoading(false);
    }
  };

  const getFonction = async () => {
    try {
      const response = await serviceFonction.getFonction();
      setFonction(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFonction();
  }, []);

  return (
    <>
      <Otbar title="Espace utilisateurs" />
      <div className="px-40">
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <form onSubmit={handleSubmit}>
            <h2 className="font-bold text-[20px]">Creer un utilisateur</h2>
            <hr />
            <br />
            <div>
              {loading ? (
                <div className="float-right">
                <Spinner />
                </div>
              ) : (
                <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right">
                  Enregistrer
                </button>
              )}
            </div>
            <br />
            <div className="grid md:grid-cols-1 xl:grid-cols-1 gap-2">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="nom"
                  id="email"
                  value={agent.nom}
                  onChange={handleChange}
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
                  name="prenom"
                  value={agent.prenom}
                  onChange={handleChange}
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
                  type="text"
                  name="email"
                  value={agent.email}
                  onChange={handleChange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Mot de passe
                </label>
                <input
                  type="text"
                  name="mdp"
                  value={agent.mdp}
                  onChange={handleChange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Role
                </label>
                <select
                  name="id_fonction"
                  value={agent.id_fonction}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="0">Selection un role</option>
                  {fonction?.map((ville) => (
                    <option value={ville.id}>{ville.initule}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="inline-flex items-center me-5 cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Actif
                  </span>
                </label>
              </div>
              <hr />
              <h5 className="font-bold"> Horaires de travail</h5>
              <table className="border border-gray-300 bg-gray-300 p-2 rounded-xl">
                <thead>
                  <th>Jour</th>
                  <th>Debut</th>
                  <th>Fin</th>
                  <th>
                    <span
                      className=" inline-block p-2 cursor-pointer border border-green-500 bg-green-500 rounded-xl text-white"
                      onClick={handleAddRow}
                    >
                      <FaPlus />
                    </span>
                  </th>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index} className="px-3s">
                      <td>
                        <select
                          value={row.jour}
                          onChange={(e) =>
                            handleInputChange(index, "jour", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="Lundi">Lundi</option>
                          <option value="Mardi">Mardi</option>
                          <option value="Mercredi">Mercredi</option>
                          <option value="Jeudi">Jeudi</option>
                          <option value="Vendredi">Vendredi</option>
                          <option value="Samedi">Samedi</option>
                          <option value="Dimanche">Dimanche</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="debut"
                          value={row.debut}
                          onChange={(e) =>
                            handleInputChange(index, "debut", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="fin"
                          value={row.fin}
                          onChange={(e) =>
                            handleInputChange(index, "fin", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />
            </div>
            <button
              type="reset"
              className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#ba312a] p-3 rounded-[15px] float-right"
            >
              Supprimer
            </button>
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Utilisateur;

import React, { useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
  button,
} from "@material-tailwind/react";
import AgentService from "../../../Services/Agent.service";
import { RepositoryConfigInterface } from "../../../Interfaces/RepositoryConfig.interface";
import { UserInterface } from "../../../Interfaces/UserInterface";
import Spinner from "../../../components/Spinner";
import Swal from "sweetalert2";

const TableUser = () => {
  const [agent, setAgent] = useState<UserInterface[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  let number = 1;

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getUtilisateur = async () => {
    try {
      const response = await AgntService.getAgent();
      setAgent(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const AgntService = new AgentService(config);

  useEffect(() => {
    getUtilisateur();
    setLoading(false);
  }, []);

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  const TABLE_HEAD = [
    "N°",
    "Nom",
    "Prenom",
    "Email",
    "Fonction",
    "Active",
    "Action",
  ];

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas récupérer cette categorie status !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
    });

    if (result.isConfirmed) {
      try {
        await AgntService.deleteAgent(id);
        Swal.fire(
          "Supprimé !",
          "Votre categorie status a été supprimée.",
          "success"
        );
        getUtilisateur();
      } catch (error) {
        Swal.fire(
          "Erreur !",
          "Une erreur est survenue lors de la suppression.",
          "error"
        );
      }
    }
  };
  return (
    <>
      <div className="">
        <center>{loading && <Spinner />}</center>
        <Card className="h-full w-full overflow-scroll">
          <CardHeader className="rounded-none p-4">
            <div className="flex items-center md:w-80 px-4">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchDette}
                id="email"
                placeholder="Recherche"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-1">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.isArray(agent) &&
                  agent
                    .filter((data) => {
                      if (
                        typeof data.nom !== "string" ||
                        typeof data.prenom !== "string" ||
                        typeof data.email !== "string"
                      ) {
                        return false;
                      }
                      return (
                        data.nom
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        data.prenom
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        data.email
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      );
                    })
                    .map((data, index) => (
                      <>
                        <tr key={index} className="even:bg-blue-gray-50/50">
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal font-bold"
                            >
                              {number++}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal font-bold"
                            >
                              {data.nom}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data.prenom}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data.email}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold bg-green-300 rounded-xl inline-block p-2"
                            >
                              {data.fonction?.initule}
                            </Typography>
                          </td>

                          <td className="font-normal p-4">
                            {data.statut === "1" ? (
                              <div>
                                <label className="inline-flex items-center me-5 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    checked
                                  />
                                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                            ) : (
                              <div>
                                <label className="inline-flex items-center me-5 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                  />
                                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                </label>
                              </div>
                            )}
                          </td>
                          <td className="p-4 flex gap-2">
                            <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-blue-500 p-3 rounded-[15px] float-right">
                              <PencilIcon className="w-5 h-5 text-white" />
                            </button>
                            <button
                              className="border-[#1e58c1] text-white flex items-center gap-3 bg-red-500 p-3 rounded-[15px] float-right"
                              onClick={() => handleDelete(data.id)}
                            >
                              <FaTrash className="w-5 h-5 text-white" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="7">
                            <hr />
                          </td>
                        </tr>
                      </>
                    ))}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center gap-1 border-t border-blue-gray-50 p-4">
            <Button variant="outlined" size="sm">
              Precedent
            </Button>
            <Button variant="outlined" size="sm">
              Suivant
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default TableUser;

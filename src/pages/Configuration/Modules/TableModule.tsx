import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { RepositoryConfigInterface } from "../../../Interfaces/RepositoryConfig.interface";
import Spinner from "../../../components/Spinner";
import Swal from "sweetalert2";
import FonctionService from "../../../Services/Fonction.service";
import { FonctionInterface } from "../../../Interfaces/FonctionInterface";
import { FonctionMenuInterface } from "../../../Interfaces/FonctionMenu";
import MenuService from "../../../Services/Menu.service";
import { ModuleInterface } from "../../../Interfaces/ModuleInterface";
import ModuleService from "../../../Services/Module.service";
import { FaTrash } from "react-icons/fa";

const TableModule = () => {
  const [agent, setAgent] = useState<FonctionInterface[] | null>(null);
  const [menu, setmenu] = useState<FonctionMenuInterface[] | null>(null);
  const [module, setmodule] = useState<ModuleInterface[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingMenu, setLoadingMenu] = useState(false);
  const [loadingModule, setLoadingModule] = useState(false);
  const [activeFonction, setActiveFonction] = useState<string | null>(null);
  let number = 1;
  let numbermenu = 1;
  let numbermodule = 1;

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getFonction = async () => {
    try {
      const response = await fonctionservice.getFonction();
      setAgent(response.data);
      console.log(agent);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const fonctionservice = new FonctionService(config);
  const fonctiomenu = new MenuService(config);
  const moduleservice = new ModuleService(config);

  useEffect(() => {
    getFonction();
    setLoading(false);
  }, []);

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  const TABLE_HEAD = ["N°", "Nom"];
  const TABLE_HEAD_MENU = ["N°", "Nom", "Action"];
  const TABLE_HEAD_MODULE = ["N°", "Nom", "Action"];

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
        //await .deleteAgent(id);
        Swal.fire(
          "Supprimé !",
          "Votre categorie status a été supprimée.",
          "success"
        );
        //getUtilisateur();
      } catch (error) {
        Swal.fire(
          "Erreur !",
          "Une erreur est survenue lors de la suppression.",
          "error"
        );
      }
    }
  };

  const handleMenu = async (id: string) => {
    try {
      setLoadingMenu(true);
      setLoadingModule(true);
      setActiveFonction(id);
      const response = await fonctiomenu.getMenuFonciton(id);
      const responseModule = await moduleservice.getModuleFonciton(id);
      setmenu(response.data);
      setmodule(responseModule.data);
      setLoadingMenu(false);
      setLoadingModule(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleModule = async (id: string) => {
    alert(id);
  };
  return (
    <>
      <div className="flex gap-2">
        <div className="w-4/12">
          <div className="">
            <center>{loading && <Spinner />}</center>
            <Card className="h-full w-full">
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
              <CardBody className=" px-1">
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
                          if (typeof data.initule !== "string") {
                            return false;
                          }
                          return data.initule
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase());
                        })
                        .map((data, index) => (
                          <>
                            <tr
                              key={index}
                              className={`even:bg-blue-gray-50/50 cursor-pointer hover:bg-blue-50 transition-all ${
                                activeFonction === data.id
                                  ? "bg-blue-300"
                                  : "bg-gray-100 hover:bg-blue-50"
                              } `}
                              onClick={() => handleMenu(data.id)}
                            >
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
                                  {data.initule}
                                </Typography>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="2">
                                <hr />
                              </td>
                            </tr>
                          </>
                        ))}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="w-4/12">
          <div className="">
            <Card className="h-full w-full">
              <CardHeader className="rounded-none p-4">
                <h1>Les menus</h1>
              </CardHeader>
              <CardBody className=" px-1">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD_MENU.map((head) => (
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
                    {Array.isArray(menu) &&
                      menu.map((data, index) => (
                        <>
                          <tr
                            key={index}
                            className="even:bg-blue-gray-50/50 cursor-pointer hover:bg-blue-50 transition-all"
                          >
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                {numbermenu++}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                {data.menu.nom}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                <button className="border p-2 rounded-lg bg-red-600 text-white border-red-600">
                                  <FaTrash />
                                </button>
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3">
                              <hr />
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
                <center>{loadingMenu && <Spinner />}</center>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="w-4/12">
          <div className="">
            <Card className="h-full w-full">
              <CardHeader className="rounded-none p-4">
                <h1>Les moodules</h1>
              </CardHeader>
              <CardBody className=" px-1">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD_MODULE.map((head) => (
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
                    {Array.isArray(module) &&
                      module.map((data, index) => (
                        <>
                          <tr
                            key={index}
                            className="even:bg-blue-gray-50/50 cursor-pointer hover:bg-blue-50 transition-all"
                          >
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                {numbermodule++}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                {data.moduleperso.libelle}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                <button className="border p-2 rounded-lg bg-red-600 text-white border-red-600">
                                  <FaTrash />
                                </button>
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3">
                              <hr />
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
                <center>{loadingModule && <Spinner />}</center>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableModule;

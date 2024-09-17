import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,

  Spinner,
} from "@material-tailwind/react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { ModulePersoInterface } from "../../Interfaces/ModulePersoInterface";
import ModulePersoService from "../../Services/ModulePerso.service";

const ModulePersoTable = () => {
  const [agent, setAgent] = useState<ModulePersoInterface[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  let number = 1;

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getModule = async () => {
    try {
      const response = await moduleService.getModuleperso();
      setAgent(response.data);
      console.log(agent);
      console.log(agent);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const moduleService = new ModulePersoService(config);

  useEffect(() => {
    getModule();
    setLoading(false);
  }, []);

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  const TABLE_HEAD = ["N°", "Nom", "statut"];
  return (
    <>
      <div className="">
        <center>{loading && <Spinner />}</center>
        <Card className="h-full w-full ">
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
          <CardBody className="px-1">
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
                      if (typeof data.libelle !== "string") {
                        return false;
                      }
                      return data.libelle
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
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
                              {data.libelle}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
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
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ModulePersoTable;

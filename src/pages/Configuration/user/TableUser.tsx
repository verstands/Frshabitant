import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
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
} from "@material-tailwind/react";
import AgentService from "../../../Services/Agent.service";
import { RepositoryConfigInterface } from "../../../Interfaces/RepositoryConfig.interface";
import { UserInterface } from "../../../Interfaces/UserInterface";
import Spinner from "../../../components/Spinner";
import hasAccess from "../../../components/hasAcess";

const TableUser = () => {
  const [agent, setAgent] = useState<UserInterface[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

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

  const TABLE_HEAD = ["Nom", "Prenom", "Email", "Type", "Active", "Action"];
  return (
    <>
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
                      <tr key={index}>
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
                            className="font-normal"
                          >
                            {data.statut}
                          </Typography>
                        </td>
                        <td className="font-normal  p-4">
                          <div className="border rounded-[10px] p-1 bg-green-600 text-white inline-block border-green-600">
                            Oui
                          </div>
                        </td>
                        <td className="p-4">
                          {
                             hasAccess("update") && (
                              <IconButton className="font flex items-center justify-center bg-blue-600 ">
                              <PencilIcon className="w-5 h-5 text-white" />
                            </IconButton>
                             )
                          }
                        </td>
                      </tr>
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

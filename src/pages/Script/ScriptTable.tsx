import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import hasAccess from "../../components/hasAcess";
import { ScriptInterface } from "../../Interfaces/ScriptInterface";
import ScriptService from "../../Services/Script.service";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const ScriptTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [role, setRole] = useState<ScriptInterface[] | null>(null);
    const [loading, setLoading] = useState(true);

    const config: RepositoryConfigInterface = {
        appConfig: {},
        dialog: {},
      };

    const handleSearchDette = (event) => {
        setSearchTerm(event.target.value);
    };

    const getRoles = async () => {
        try {
          const response = await RoleServices.getScript();
          setRole(response.data);
        } catch (error: unknown) {
          console.log(error);
        }
      };

  const RoleServices = new ScriptService(config);

  useEffect(() => {
    getRoles();
    setLoading(false);
  }, []);

  const TABLE_HEAD = ["Titre","Contenu", "Produit", "Action"];

  const removeHtmlTags = (text: string) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = text;
    return tempElement.textContent || tempElement.innerText || "";
  };

  return (
    <>
      {hasAccess("read") && (
        <div className="pt-2">
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
              {Array.isArray(role) &&
                role
                  .filter((data) => {
                    if (
                      typeof data.contenue !== "string" ||
                      typeof data.position !== "string" ||
                      typeof data.titre !== "string"
                    ) {
                      return false;
                    }
                    return (
                      data.contenue
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      data.position
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      data.titre
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    );
                  })
                  .map((data, index) => (
                    <tr key={index}>
                      <td className="p-4 font-bold">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {data.titre}
                        </Typography>
                      </td>
                      <td className="p-4 ">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {removeHtmlTags(data.contenue).slice(0, 50)}...
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {data.id_produit?.titre}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          <Link to={`/scriptupdate/${data.id}`} className=" inline-block p-2 border border-blue-500 bg-blue-500 rounded-[10px]">
                          <FaEdit color="white" />
                          </Link>
                        </Typography>
                      </td>
                    </tr>
                  ))}
            </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
       )}
    </>
  )
}

export default ScriptTable
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { ModelMailInterface } from "../../Interfaces/ModelMailInterface";
import ModelMailService from "../../Services/ModelMail.service";
import hasAccess from "../../components/hasAcess";
import { FaEdit, FaTrash } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const ModelzMailTable = () => {
  const [data, setdata] = useState<ModelMailInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  let numero = 1;

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const modelmailservice = new ModelMailService(config);

  const getModelmail = async () => {
    try {
      const response = await modelmailservice.getModelmail();
      setdata(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getModelmail();
  }, []);
  const TABLE_HEAD = ["N°", "Modele", "Sujet", "Campagne", "Agent", "Active", "Action"];
  return (
    <>
      <div className="p-5">
        <Card className="h-full w-full">
          <CardHeader className="rounded-none p-4">
            <div className="flex items-center md:w-80 px-4">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchDette}
                name="email"
                id="email"
                placeholder="Recherche sujet ou model"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </CardHeader>
          <center>
          {loading && <Spinner />}
          </center>
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
                {Array.isArray(data) &&
                  data
                    .filter((data) => {
                      if (typeof data.sujet !== "string" || typeof data.nom !== "string"){
                        return false;
                      }
                      return data.sujet
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||  data.nom
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
                    })
                    .map((data, index) => (
                      <tr key={index}>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal font-bold"
                          >
                            {numero++}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.nom}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.sujet}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.capagnemodel?.titre}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.fonctionmodel?.initule}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            <p className={data.active ? "bg-green-500 inline-block border p-2 rounded-xl text-white" : "bg-red-500 inline-block border p-2 rounded-xl text-white"}>{data.active ? "Activer" : "Desactiver"}</p>
                          </Typography>
                        </td>

                        <td className="p-4">
                          {hasAccess("delete") && (
                            <div className="flex gap-2">
                              <button className="border p-2 rounded-lg bg-red-600 text-white border-red-600">
                                <FaTrash />
                              </button>
                              <button className="border p-2 rounded-lg bg-green-600 text-white border-green-600">
                                <FaEdit />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ModelzMailTable;

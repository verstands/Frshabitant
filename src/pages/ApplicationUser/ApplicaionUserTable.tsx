import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Spinner,
} from "@material-tailwind/react";
import { FaTrash } from "react-icons/fa";
import { ApplicationInterface } from "../../Interfaces/ApplicationInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import AccesApplicationService from "../../Services/AccesApplication.service";
import hasAccess from "../../components/hasAcess";

const ApplicaionUserTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [application, setApplication] = useState<ApplicationInterface[] | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  let numero = 1;

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getApplicationAcces = async () => {
    try {
      const response = await RoleUserServices.getApplicationacces();
      setApplication(response.data);
      console.log(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const RoleUserServices = new AccesApplicationService(config);

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getApplicationAcces();
    setLoading(false);
  }, []);
  const TABLE_HEAD = ["N°", "Nom Role", "Nom application", "Action"];

  return (
    <>
      {loading && (
        <center>
          <Spinner />
        </center>
      )}
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
                  {Array.isArray(application) &&
                    application
                      .filter((data) => {
                        if (
                          typeof data.application?.titre !== "string" ||
                          typeof data.Accesapplications?.initule !== "string"
                        ) {
                          return false;
                        }
                        return (
                          data.application.titre
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          data.Accesapplications.initule
                        );
                      })
                      .map((data, index) => (
                        <tr key={index}>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className=" font-bold"
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
                              {data.Accesapplications?.initule}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {data.application?.titre }
                            </Typography>
                          </td>
                          
                          <td className="p-4">
                            {hasAccess("delete") && (
                              <button className="border p-2 rounded-lg bg-red-600 text-white border-red-600">
                                <FaTrash />
                              </button>
                            )}
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
  );
};

export default ApplicaionUserTable;

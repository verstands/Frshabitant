import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import Spinner from "../../components/Spinner";
import { HistoriqueInterface } from "../../Interfaces/HistoriqueInterface";
import HistoriqueService from "../../Services/Historique.service";
import dateFormat from "dateformat";

const HistoriqueTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [role, setRole] = useState<HistoriqueInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 2;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const Loggs = new HistoriqueService(config);

  const getRoleUser = async () => {
    try {
      const response = await Loggs.getHistorique();
      setRole(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleSearchDette = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getRoleUser();
    setLoading(false);
  }, [currentPage]);

  const TABLE_HEAD = [
    "Date",
    "utilisateur",
    "Ip",
    "Navigateur",
    "Isp",
    "Os",
    "Pays",
    "Action",
  ];

  const filteredRoles = role?.filter(data =>
    data.isp?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedRoles = filteredRoles?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="pt-2">
        <center>{loading && <Spinner />}</center>
        <Card className="h-full w-full">
          <CardHeader className="rounded-none p-4">
            <div className="flex items-center justify-between  px-4">
              <div className="md:w-80">
                <input
                  type="text"
                  name="email"
                  value={searchTerm}
                  onChange={handleSearchDette}
                  id="email"
                  placeholder="Recherche"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handlePreviousPage} variant="outlined" size="sm">
                  Précédent
                </Button>
                <Button onClick={handleNextPage} variant="outlined" size="sm">
                  Suivant
                </Button>
              </div>
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
                      if (typeof data.isp !== "string") {
                        return false;
                      }
                      return data.isp
                        ?.toLowerCase()
                        .includes(searchTerm.toLowerCase());
                    })
                    .map((data, index) => (
                      <>
                      <tr key={index}>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal font-bold"
                          >
                            {dateFormat(data.createdAt, "d-mm-yyyy: HH:MM:ss")}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.agent?.prenom} {data.agent?.nom}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.ip}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.browser}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.isp}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.os}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.pays}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.endpoint}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                          <td colSpan="8">
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

export default HistoriqueTable;

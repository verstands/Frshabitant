import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
} from "@material-tailwind/react";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import { useEffect, useState } from "react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import ProspectService from "../../Services/Prospect.service";
import Spinner from "../../components/Spinner";
import { FaEye, FaPhone, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAgentData from "../../components/Agents/useAgentData";
import { UserInterface } from "../../Interfaces/UserInterface";

const ProspectTable = () => {
  const [prospect, setProspect] = useState<ProspectInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { isAdmin, accessDenied } = useAgentData();

  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "{}"
  );

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const serviceProspect = new ProspectService(config);

  const getProspect = async () => {
    try {
      const response = await serviceProspect.getProspect();
      setProspect(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getProspectAgent = async () => {
    try {
      const response = await serviceProspect.getProspectAgent(String(user.id));
      setProspect(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      getProspect();
    } else {
      getProspectAgent();
    }
  }, [page, isAdmin, user.id]);

  const TABLE_HEAD = [
    "Action",
    "Produit",
    "Nom",
    "Email",
    "Status",
    "Utilisateur",
    "Campagne",
    "Type",
  ];

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };
  
  const handlePrevPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };
  return (
    <>
      <center>{loading && <Spinner />}</center>
      <Card className="h-full w-full">
        <CardHeader className="rounded-none py-4">
          <div className="flex items-center justify-between px-4">
            <div className="md:w-80 ">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchDette}
                name="email"
                id="email"
                placeholder="Recherche"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                size="sm"
                onClick={handlePrevPage}
                disabled={page === 1}
              >
                Précédent
              </Button>
              <Button variant="outlined" size="sm" onClick={handleNextPage}>
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
              {Array.isArray(prospect) &&
                prospect
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
                    <tr key={index}>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              <div className="border border-green-100 bg-green-100 p-3 rounded-xl">
                                <Link to={`/appels/${data.id}`}>
                                  <FaPhone color="green" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Typography>
                      </td>

                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          <center>
                            <center>
                              <FaUser color="blue" />
                            </center>
                            <div className="text-blue-500">
                              {data.produitpospect && data.produitpospect.titre}
                            </div>
                          </center>
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
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
                          {data.email}
                        </Typography>
                      </td>

                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {data.status === "0" && (
                            <div className="border p-1  border-gray-400 bg-gray-400 rounded-[50px] text-white">
                              <center>Nouveau</center>
                            </div>
                          )}
                          {data.status === "2" && (
                            <div className="border p-1  border-yellow-400 bg-yellow-400 rounded-[50px] text-white">
                              <center>NRP</center>
                            </div>
                          )}
                          {data.status === "1" && (
                            <div className="border p-1  border-green-400 bg-green-400 rounded-[50px] text-white">
                              <center>RDV</center>
                            </div>
                          )}
                          {data.status === "3" && (
                            <div className="border p-1  border-red-400 bg-red-400 rounded-[50px] text-white">
                              <center>Non valide</center>
                            </div>
                          )}
                          {data.status === "4" && (
                            <div className="border p-1  border-red-400 bg-red-400 rounded-[50px] text-white">
                              <center>Pas interéssé</center>
                            </div>
                          )}
                          {data.status === "5" && (
                            <div className="border p-1  border-red-400 bg-red-400 rounded-[50px] text-white">
                              <center>Ne pas appeller</center>
                            </div>
                          )}
                          {data.status === "6" && (
                            <div className="border p-1  border-gray-400 bg-gray-400 rounded-[50px] text-white">
                              <center>Mauvai numéro</center>
                            </div>
                          )}
                          {data.status === "7" && (
                            <div className="border p-1  border-blue-400 bg-blue-400 rounded-[50px] text-white">
                              <center>Faux lead</center>
                            </div>
                          )}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {data.agentpospect && data.agentpospect.prenom}{" "}
                          {data.agentpospect && data.agentpospect.nom}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {data.capagnepospect && data.capagnepospect.titre}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {data.typelead}
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
    </>
  );
};

export default ProspectTable;

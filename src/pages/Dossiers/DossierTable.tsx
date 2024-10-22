import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import { useEffect, useState } from "react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import DossierService from "../../Services/Dossier.service";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaPhone, FaUser } from "react-icons/fa";

 
const DossierTable = ({ onUpdateDossierData }: { onUpdateDossierData: (data: any[]) => void }) => {
  const [prospect, setProspect] = useState<ProspectInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getProspect = async () => {
    try {
      const response = await documentProspect.getDossier();
      setProspect(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };


  useEffect(() => {
    getProspect();
  }, []);

  useEffect(() => {
    if (prospect) {
      onUpdateDossierData(prospect);
    }
  }, [prospect]);

  const documentProspect = new DossierService(config);

  const TABLE_HEAD = [
    "Action",
    "Produit",
    "Nom",
    "Email",
    "Telephone",
    "Status",
    "Utilisateur",
    "Campagne",
  ];

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className="">
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
              <Button variant="outlined" size="sm">
              Precedent
            </Button>
            <Button variant="outlined" size="sm">
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
                                <Link to={`/detailDossier/${data.id}`}>
                                  <div className="border border-green-100 bg-green-100  p-3 rounded-xl">
                                    <FaEdit color="green" />
                                  </div>
                                </Link>
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
                              <FaUser color="blue" />
                              <div className="text-blue-500">
                                {data.produitpospect &&
                                  data.produitpospect.titre}
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
                            {data.telephone}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            <div className="border p-1  border-gray-400 bg-gray-400 rounded-[50px] text-white">
                              <center>Nouveau</center>
                            </div>
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

export default DossierTable;

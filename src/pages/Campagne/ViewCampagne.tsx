import Otbar from "../../components/Agents/Otbar";
import { FaHeadphones, FaPlay, FaPlus, FaTrash, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import CampagneService from "../../Services/Campagne.service";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { CampagneInterfce } from "../../Interfaces/CampagneInterface";
import Spinner from "../../components/Spinner";
import useHasModule from "../../components/Agents/useHasModule";
import Swal from "sweetalert2";

const ViewCampagne = () => {
  const [prospect, setProspect] = useState<CampagneInterfce[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const serviceCampgne = new CampagneService(config);

  const getProspect = async () => {
    try {
      const response = await serviceCampgne.getCampagne();
      setProspect(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProspect();
  }, []);
  const TABLE_HEAD = [
    "Produit",
    "Titre",
    "Status",
    "Stats",
    "Total",
    "Distribué",
    "Restant",
    "Action",
    "",
  ];

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  const hasModule = useHasModule("affichercampagne");

  if (!hasModule) {
    return (
      <div className="font-bold">
        <center>
          {" "}
          <br /> Accès refusé
        </center>
      </div>
    );
  }

  const handleDeleteCampagne = async (id: string) => {
    const result = await Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas récupérer cette campagne !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
    });

    if (result.isConfirmed) {
      try {
        //await serviceCampgne.deleteCampagne(id);
        Swal.fire("Supprimé !", "Votre campagne a été supprimée.", "success");
        getProspect();
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
      <Otbar title="Espace Campagne" />
      <center>{loading && <Spinner />}</center>
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-4">
          <h1 className="text-[#b3b4b6]">Campagne / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
        <Link to="">
          <div className="border-[#1e58c1] flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px]">
            <FaPlus className="bg-white  p-1 rounded-[50%] text-[#1e58c1]" />
            <Link to="/typeproduit" className=" text-white">
              Nouveau Campagne
            </Link>
          </div>
        </Link>
      </div>
      <div className="px-4">
        <Card className="h-full w-full">
          <CardHeader className="rounded-none p-4">
            <div className="flex items-center justify-between px-4">
              <div className="md:w-80 ">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={searchTerm}
                  onChange={handleSearchDette}
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
                        typeof data.titre !== "string" ||
                        typeof data.statut !== "string" ||
                        typeof data.distribue !== "string"
                      ) {
                        return false;
                      }
                      return (
                        data.titre
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        data.statut
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        data.distribue
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
                            className="font-normal"
                          >
                            <center>
                              <FaUser color="blue" />
                              <div className="text-blue-500">
                                {data.produit && data.produit.titre}
                              </div>
                            </center>
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.titre}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data.statusCounts?.status1 === 0 &&
                            data.statusCounts?.status2 === 0 &&
                            data.statusCounts?.status3 === 0 &&
                            data.statusCounts?.status4 === 0 &&
                            data.statusCounts?.status6 === 0 &&
                            data.statusCounts?.status5 === 0 &&
                            data.statusCounts?.status7 === 0 ? (
                              <p className="border rounded-[10px] p-1 bg-gray-500 text-white inline-block border-gray-600">
                                Nouvelle
                              </p>
                            ) : (
                              <p className="border rounded-[10px] p-1 bg-orange-600 text-white inline-block border-orange-600">
                                Distribution
                              </p>
                            )}
                          </Typography>
                        </td>

                        <td className="font-normal  p-4">
                          <p className="border text-[10px] rounded-[10px] p-1 bg-green-500 text-white inline-block border-green-600">
                            RDV : {data.statusCounts?.status1}
                          </p>
                          <br />
                          <p className="border text-[10px] rounded-[10px] p-1 bg-yellow-500 text-white inline-block border-yellow-600">
                            NRP : {data.statusCounts?.status2}
                          </p>
                          <br />
                          <p className="border text-[10px] rounded-[10px] p-1 bg-red-500 text-white inline-block border-red-600">
                            Non valide : {data.statusCounts?.status3}
                          </p>
                          <br />
                          <p className="border text-[10px] rounded-[10px] p-1 bg-red-500 text-white inline-block border-red-600">
                            Pas interessé : {data.statusCounts?.status4}
                          </p>
                          <br />
                          <p className="border text-[10px] rounded-[10px] p-1 bg-orange-500 text-white inline-block border-orange-600">
                            Mauvais numéro : {data.statusCounts?.status6}
                          </p>
                          <br />
                          <p className="border text-[10px] rounded-[10px] p-1 bg-blue-500 text-white inline-block border-blue-600">
                            Faux lead : {data.statusCounts?.status7}
                          </p>
                          <br />
                          <p className="border text-[10px] rounded-[10px] p-1 bg-gray-500 text-white inline-block border-blue-600">
                            Ne pas appeler : {data.statusCounts?.status5}
                          </p>
                          <br />
                          <p className="border text-[10px] rounded-[10px] p-1 bg-gray-500 text-white inline-block border-blue-600">
                            a ppeler : 0
                          </p>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data.total}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data.distribue}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data.total -
                              (data.statusCounts?.status1 +
                                data.statusCounts?.status2 +
                                data.statusCounts?.status3 +
                                data.statusCounts?.status4 +
                                data.statusCounts?.status6 +
                                data.statusCounts?.status7)}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            <div className="flex items-center">
                              <div className="border border-green-500 bg-green-500 p-3 rounded-l-xl">
                                <Link to={`/appels/campagne/${data.id}`}>
                                  <FaPlay color="white" />
                                </Link>
                              </div>
                              <div className="border border-blue-500 bg-blue-500 p-3 ">
                                <Link to={`/campagneAddLead/${data.id}`}>
                                  <FaPlus color="white" />
                                </Link>
                              </div>
                              <div className="border border-red-500 bg-red-500 p-3 ">
                                <Link to={''}
                                  onClick={() => handleDeleteCampagne(data.id)}
                                >
                                  <FaTrash color="white" />
                                </Link>
                              </div>
                              <div className="border border-orange-100 bg-orange-200 p-3 rounded-r-xl">
                                <Link to={``}>
                                  <FaHeadphones color="orange" />
                                </Link>
                              </div>
                            </div>
                          </Typography>
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

export default ViewCampagne;

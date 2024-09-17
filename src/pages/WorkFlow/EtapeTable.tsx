import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import Spinner from "../../components/Spinner";
import { EtapeWorkFlowInterface } from "../../Interfaces/EtapeWorkFlowInterface";
import EtapeWorkFlowInterService from "../../Services/EtapeWorkFlow.service";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import WorkFlowInterService from "../../Services/Workflow.service";
import { WorkFlowInterface } from "../../Interfaces/WorkFlowInterface";

const EtapeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [role, setRole] = useState<EtapeWorkFlowInterface[] | null>(null);
  const [work, setwork] = useState<WorkFlowInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loadingCat, setLoadingCat] = useState(false);

  


  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getwork = async () => {
    try {
      const response = await workflowservice.getWorkFlow();
      setwork(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getRoleUser = async () => {
    try {
      const response = await RoleUserServices.getEtapeWorkFlow();
      setRole(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getEtapeID = async (id: string) => {
    try {
      setLoadingCat(true);
      const response = await RoleUserServices.getEtapeWorkFlowEtape(id);
      setRole(response.data);
      
      setActiveCategory(id);
      setLoadingCat(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const RoleUserServices = new EtapeWorkFlowInterService(config);
  const workflowservice = new WorkFlowInterService(config);

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getwork();
  }, []);
  const TABLE_HEAD = [
    "Ordre",
    "Couleur",
    "Libelle",
    "Description",
    "Status",
    "Action",
  ];

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
        //await serviceCampgne.deleteCampagne(id);
        Swal.fire("Supprimé !", "Votre categorie status a été supprimée.", "success");
        //getProspect();
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
    <br />
    <br />
      <div className="flex pt-3 gap-2">
      <div className="w-4/12">
          <Card className="h-full w-full">
            <CardHeader className="rounded-none bg-blue-300 p-4">
              <div className="flex items-center md:w-80 px-4">
                <h1 className="text-white font-bold">Workflow</h1>
              </div>
            </CardHeader>
            {loading && (
              <center>
                <Spinner />
              </center>
            )}
            <CardBody className="overflow-y-auto px-4 py-2 max-h-96">
              {work?.map((r) => (
                <div key={r.id} className="mb-4">
                  <div
                  className={`p-4 flex justify-between items-center shadow-sm rounded-lg cursor-pointer transition-all ${
                    activeCategory === r.id
                      ? "bg-blue-200"
                      : "bg-gray-100 hover:bg-blue-50"
                  }`} 
                  onClick={() => getEtapeID(r.id)}
                >
                    <h1 className="text-lg font-semibold text-gray-700">
                      {r.libelle}
                    </h1>
                    <div className="inline-block px-3 py-1 bg-slate-500 text-sm rounded-full text-white font-medium">
                      40
                    </div>
                  </div>
                 
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
        <div className="w-8/12">

        <Card className="h-full w-full">
          <CardHeader className="rounded-none p-4  bg-blue-300">
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
                {Array.isArray(role) &&
                  role
                    .filter((data) => {
                      if (
                        typeof data.ordre !== "string" ||
                        typeof data.couleur !== "string" ||
                        typeof data.libelle !== "string"
                      ) {
                        return false;
                      }
                      return (
                        data.ordre
                          ?.toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        data.couleur
                          ?.toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        data.libelle
                          ?.toLowerCase()
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
                            className="font-normal font-bold"
                          >
                            {data.ordre}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            <div
                              className="w-40 pb-4 h-8 rounded"
                              style={{ backgroundColor: data.couleur }}
                            ></div>
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.libelle}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.description.slice(0, 50)}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
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
                        <td className="p-4">
                          <div className="flex gap-2">
                            <button className="border p-2 rounded-lg bg-red-600 text-white border-red-600"
                            onClick={() => handleDelete(data.id)}
                            >
                              <FaTrash />
                            </button>
                            <button className="border p-2 rounded-lg bg-blue-600 text-white border-blue-600">
                              <FaEdit />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                          <td colSpan="6">
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
    </>
  );
};

export default EtapeTable;

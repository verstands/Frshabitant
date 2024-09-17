import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { EtapeWorkFlowInterface } from "../../Interfaces/EtapeWorkFlowInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import EtapeWorkFlowInterService from "../../Services/EtapeWorkFlow.service";
import Spinner from "../../components/Spinner";
import { CategorieWorkFlowInterface } from "../../Interfaces/CategorieWorkFlow";
import CategorieWorkFlowService from "../../Services/CategorieWorkFlow.service";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CategorieStatutTable = () => {
  const TABLE_HEAD = ["Ordre", "Libelle", "Activé", "Action"];
  const [role, setRole] = useState<EtapeWorkFlowInterface[] | null>(null);
  const [roleCat, setRoleCAt] = useState<CategorieWorkFlowInterface[] | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [loadingCat, setLoadingCat] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);


  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const RoleUserServices = new EtapeWorkFlowInterService(config);
  const categorieWorkService = new CategorieWorkFlowService(config);

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
      const response = await categorieWorkService.getCategorieWorkFlowEtape(id);
      setRoleCAt(response.data);
      setActiveCategory(id);
      setLoadingCat(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoleUser();
  }, []);

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
        Swal.fire(
          "Supprimé !",
          "Votre categorie status a été supprimée.",
          "success"
        );
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
      <div className="flex gap-2">
        <div className="w-4/12">
          <Card className="h-full w-full">
            <CardHeader className="rounded-none bg-blue-300 p-4">
              <div className="flex items-center md:w-80 px-4">
                <h1 className="text-white font-bold">Les étapes de workflow</h1>
              </div>
            </CardHeader>
            {loading && (
              <center>
                <Spinner />
              </center>
            )}
            <CardBody className="overflow-y-auto px-4 py-2 max-h-96">
              {role?.map((r) => (
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
            <CardHeader className="bg-blue-300 py-4 rounded-none">
              <div className="flex items-center md:w-80 px-4">
                <h1 className="text-white font-bold">
                  Le(s) categotie(s) de statut(s)
                </h1>
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
                  {Array.isArray(roleCat) &&
                    roleCat.map((data, index) => (
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
                              {data.libelle}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {data.statut === "1" && (
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
                              )}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <button
                              className="border p-2 rounded-lg bg-red-600 text-white border-red-600"
                              onClick={() => handleDelete(data.id)}
                            >
                              <FaTrash />
                            </button>
                            <button className="border p-2 rounded-lg bg-blue-600 text-white border-blue-600">
                              <FaEdit />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="4">
                            <hr />
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
              {loadingCat && (
                <center>
                  <Spinner />
                </center>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CategorieStatutTable;

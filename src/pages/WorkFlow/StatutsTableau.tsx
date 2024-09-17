import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import Spinner from "../../components/Spinner";
import { CategorieWorkFlowInterface } from "../../Interfaces/CategorieWorkFlow";
import CategorieWorkFlowService from "../../Services/CategorieWorkFlow.service";
import { FaEdit, FaTrash } from "react-icons/fa";
import StatuService from "../../Services/Statut.service";
import { StatusInterface } from "../../Interfaces/Status.interface";
import Swal from "sweetalert2";

const StatutTableau = () => {
  const TABLE_HEAD = ["Ordre", "Libelle", "Activé", "Action"];
  const [role, setRole] = useState<CategorieWorkFlowInterface[] | null>(null);
  const [roleCat, setRoleCAt] = useState<StatusInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingCat, setLoadingCat] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const statutService = new StatuService(config);
  const categorieWorkService = new CategorieWorkFlowService(config);

  const getRoleUser = async () => {
    try {
      const response = await categorieWorkService.getCategorieWorkFlow();
      setRole(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getEtapeID = async (id: string) => {
    try {
      setLoadingCat(true);
      const response = await statutService.getStatusCatgorie(id);
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
      text: "Vous ne pourrez pas récupérer cette status !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
    });

    if (result.isConfirmed) {
      try {
        //await serviceCampgne.deleteCampagne(id);
        Swal.fire("Supprimé !", "Votre status a été supprimée.", "success");
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
                <h1 className="text-white font-bold">
                  Les categories des statuts
                </h1>
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
                    <h1 className="text-lg font-medium text-gray-800">
                      {r.libelle}
                    </h1>
                    <div className="inline-block px-3 py-1 bg-gray-600 text-sm rounded-full text-white">
                      40
                    </div>
                  </div>
                </div>
              ))}
              <hr />
            </CardBody>
          </Card>
        </div>
        <div className="w-8/12">
          <Card className="h-full w-full">
            <CardHeader className="bg-blue-300 py-4 rounded-none">
              <div className="flex items-center md:w-80 px-4">
                <h1 className="text-white font-bold">Le(s) statut(s)</h1>
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
                              className=" font-bold"
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
                              {data.status === "true" ? (
                               <div
                               className="p-2  inline-block text-center rounded-sm text-white"
                               style={{ backgroundColor: data.couleur }}
                             >
                                   Bouton action
                                </div>
                              ) :  <div
                              className="p-2  inline-block text-center rounded-sm text-white"
                              style={{ backgroundColor: data.couleur }}
                            >
                                  Non bouton action
                               </div>}
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

export default StatutTableau;

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { FaTrash } from "react-icons/fa";
import { TypeProduitInterface } from "../../Interfaces/TypeProduitInterface";
import TypeProduitService from "../../Services/TypeProduit.service";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import Spinner from "../../components/Spinner";
import hasAccess from "../../components/hasAcess";
import Swal from "sweetalert2";

const TypeProduitTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [role, setRole] = useState<TypeProduitInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  let numero = 1;

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getRoleUser = async () => {
    try {
      const response = await RoleUserServices.getTypeProduit();
      setRole(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const RoleUserServices = new TypeProduitService(config);

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getRoleUser();
    setLoading(false);
  }, []);
  const TABLE_HEAD = ["N°", "Nom", "Desciption", "Image", "Action"];

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas récupérer cette type produit status !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
    });

    if (result.isConfirmed) {
      try {
        //await AgntService.deleteAgent(id);
        Swal.fire(
          "Supprimé !",
          "Votre categorie status a été supprimée.",
          "success"
        );
        //getUtilisateur();
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
                        if (typeof data.titre !== "string") {
                          return false;
                        }
                        return data.description
                          .toLowerCase()
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
                              {numero++}
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
                              className="font-bold"
                            >
                              {data.description}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {data.image}
                            </Typography>
                          </td>
                          <td className="p-4">
                           
                              <button className="border p-2 rounded-lg bg-red-600 text-white border-red-600"
                              onClick={() => handleDelete(data.id)}
                              >
                                <FaTrash />
                              </button>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="5">
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

export default TypeProduitTable;

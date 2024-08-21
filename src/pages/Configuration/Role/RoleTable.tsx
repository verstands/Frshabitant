import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import Spinner from "../../../components/Spinner";
import { RepositoryConfigInterface } from "../../../Interfaces/RepositoryConfig.interface";
import RoleService from "../../../Services/Role.service";
import { RoleInterface } from "../../../Interfaces/RoleInterface";
import hasAccess from "../../../components/hasAcess";

const RoleTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [role, setRole] = useState<RoleInterface[] | null>(null);
    const [loading, setLoading] = useState(true);
    let numero = 1;

    const config: RepositoryConfigInterface = {
        appConfig: {},
        dialog: {},
      };

    const handleSearchDette = (event) => {
        setSearchTerm(event.target.value);
    };

    const getRoles = async () => {
        try {
          const response = await RoleServices.getRole();
          setRole(response.data);
        } catch (error: unknown) {
          console.log(error);
        }
      };

  const RoleServices = new RoleService(config);

  useEffect(() => {
    getRoles();
    setLoading(false);
  }, []);

  const TABLE_HEAD = ["N°","Nom", "Action"];

  return (
    <>
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
              {Array.isArray(role) &&
                  role
                    .filter((data) => {
                      if (
                        typeof data.initule !== "string"
                      ) {
                        return false;
                      }
                      return (
                        data.initule
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
                            className="font-normal font-bold"
                          >
                            {numero ++}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.initule}
                          </Typography>
                        </td>
                        <td className="p-4">
                            {
                                hasAccess('update') && (
                                    <button className="border p-2 rounded-lg bg-blue-600 text-white border-blue-600">
                          <FaEdit />
                          </button>
                                )
                            }
                          
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
  )
}

export default RoleTable
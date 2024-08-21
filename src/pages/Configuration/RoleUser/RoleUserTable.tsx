import React, { useEffect, useState } from 'react'
import hasAccess from '../../../components/hasAcess';
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
  } from "@material-tailwind/react";
import Spinner from '../../../components/Spinner';
import { RepositoryConfigInterface } from '../../../Interfaces/RepositoryConfig.interface';
import RoleUserService from '../../../Services/RoleUser.service';
import { FaTrash } from 'react-icons/fa';

const RoleUserTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [role, setRole] = useState<any[] | null>(null);
    const [loading, setLoading] = useState(true);
    let numero = 1;

    const config: RepositoryConfigInterface = {
        appConfig: {},
        dialog: {},
      };

      const getRoleUser = async () => {
        try {
          const response = await RoleUserServices.getRoleUser()
          setRole(response.data);
        } catch (error: unknown) {
          console.log(error);
        }
      };
    
   const RoleUserServices = new RoleUserService(config);

    const handleSearchDette = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        getRoleUser();
        setLoading(false);
      }, []);
  const TABLE_HEAD = ["N°","Nom","Prenom","Email", "Role", "Action"];

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
                        typeof data.role.initule !== "string" ||
                        typeof data.agentrole.nom !== "string" ||
                        typeof data.agentrole.prenom !== "string" ||
                        typeof data.agentrole.email !== "string"
                      ) {
                        return false;
                      }
                      return (
                        data.role.initule
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                          data.agentrole.nom
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                          data.agentrole.prenom
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                          data.agentrole.email
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
                            {data.agentrole.nom}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.agentrole.prenom}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.agentrole.email}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {data.role.initule}
                          </Typography>
                        </td>
                        <td className="p-4"> 
                            {
                                hasAccess('delete') && (
                                    <button className="border p-2 rounded-lg bg-red-600 text-white border-red-600">
                          <FaTrash />
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
      </div>)}
    </>
  )
}

export default RoleUserTable
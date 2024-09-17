import React, { useEffect, useState } from "react";
import FonctionService from "../../Services/Fonction.service";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { FonctionInterface } from "../../Interfaces/FonctionInterface";
import { Spinner } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { CategorieRoleInterface } from "../../Interfaces/CategorieRoleInterface";
import CategorieRoleService from "../../Services/CategorieRole.service";
import { FaTrash } from "react-icons/fa";

const TableauWorkflowRole = () => {
  const [agent, setAgent] = useState<FonctionInterface[] | null>(null);
  const [cate, setcate] = useState<CategorieRoleInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeFonction, setActiveFonction] = useState<string | null>(null);
  let number = 1;

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getFonction = async () => {
    try {
      const response = await fonctionservice.getFonction();
      setAgent(response.data);
      console.log(agent);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFonction();
    setLoading(false);
  }, []);

  const fonctionservice = new FonctionService(config);
  const categorieroleSrvice = new CategorieRoleService(config);
  const TABLE_HEAD = ["N°", "Nom"];
  const TABLE_HEAD_MENU = ["N°", "Nom", "Action"];


  const handleMenu = async (id: string) => {
    try {
      setActiveFonction(id);
      const response = await categorieroleSrvice.getCategorieROleAction(id);
      setcate(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };
  return (
    <>
    <br />
    <br />
      <div className="flex gap-2">
        <div className="w-4/12">
          <div className="">
            <Card className="h-full w-full">
              <CardHeader className="rounded-none p-4">
                <h2 className="font-bold">Les Roles</h2>
              </CardHeader>
              <CardBody className=" px-1">
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
                    {Array.isArray(agent) &&
                      agent.map((data, index) => (
                        <>
                          <tr
                            key={index}
                            className={`even:bg-blue-gray-50/50 cursor-pointer hover:bg-blue-50 transition-all ${
                              activeFonction === data.id
                                ? "bg-blue-300"
                                : "bg-gray-100 hover:bg-blue-50"
                            } `}
                            onClick={() => handleMenu(data.id)}
                          >
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                {number++}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                {data.initule}
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              <hr />
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
                <center>{loading && <Spinner />}</center>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="w-8/12">
          <div className="">
            <Card className="h-full w-full">
              <CardHeader className="rounded-none p-4">
                <h2 className="font-bold">Les Categories workflow</h2>
              </CardHeader>
              <CardBody className=" px-1">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD_MENU.map((head) => (
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
                    {Array.isArray(cate) &&
                      cate.map((data, index) => (
                        <>
                          <tr
                            key={index}
                            className={`even:bg-blue-gray-50/50 cursor-pointer hover:bg-blue-50 transition-all ${
                              activeFonction === data.id
                                ? "bg-blue-300"
                                : "bg-gray-100 hover:bg-blue-50"
                            } `}
                            //onClick={() => handleMenu(data.id)}
                          >
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                {number++}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                {data.categorie?.libelle}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal font-bold"
                              >
                                <button className="border p-2 rounded-lg bg-red-600 text-white border-red-600">
                                  <FaTrash />
                                </button>
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3">
                              <hr />
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
                <center>{loading && <Spinner />}</center>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableauWorkflowRole;

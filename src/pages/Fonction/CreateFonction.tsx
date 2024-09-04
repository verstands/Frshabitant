import React, { useState } from "react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { useNavigate } from "react-router-dom";
import Otbar from "../../components/Agents/Otbar";
import { Spinner } from "@material-tailwind/react";
import { FonctionInterface } from "../../Interfaces/FonctionInterface";
import FonctionService from "../../Services/Fonction.service";
import useAgentData from "../../components/Agents/useAgentData";

const CreateFonction = () => {
  const [data, setdata] = useState<FonctionInterface>({
    initule: "",
  });
  const [loading, setLoading] = useState(false);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const typechauffageService = new FonctionService(config);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await typechauffageService.postFonction(data);
    console.log(response)
    setLoading(false);
    navigate("/fonction");
    try {
      setLoading(false);
    } catch (error: unknown) {
      console.error("Unexpected error:", error);
      setLoading(false);
    }
  };

  const { isAdmin, accessDenied } = useAgentData();

  if (accessDenied) {
    return (
      <div className="font-bold">
        <center>
          {" "}
          <br /> Accès refusé
        </center>
      </div>
    );
  }

  return (
    <>
      {isAdmin && (
        <>
          <Otbar title="Espace Fonction" />
          <div className="px-40">
            <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
              <form onSubmit={handleSubmit}>
                <h2 className="font-normal text-[20px]">
                  Ajouter une fonction
                </h2>
                <br />
                <hr />
                <br />
                <div>
                  {loading ? (
                    <div className="float-right">
                      <Spinner />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right"
                    >
                      Enregistrer
                    </button>
                  )}
                </div>
                <br />
                <div className="grid md:grid-cols-1 xl:grid-cols-1 gap-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      name="initule"
                      id="email"
                      value={data.initule}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreateFonction;

import React, { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import { Spinner } from "@material-tailwind/react";
import { UserInterface } from "../../Interfaces/UserInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import AgentService from "../../Services/Agent.service";
import Select from "react-select";
import { ApplicationInterface } from "../../Interfaces/ApplicationInterface";
import ApplicationService from "../../Services/Application.service";
import { AccesApplicationInterface } from "../../Interfaces/AccesApplication";
import AccesApplicationService from "../../Services/AccesApplication.service";
import { useNavigate } from "react-router-dom";
import FonctionService from "../../Services/Fonction.service";
import { FonctionInterface } from "../../Interfaces/FonctionInterface";

const ApplicationUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<FonctionInterface[] | null>(null);
  const [app, setApp] = useState<ApplicationInterface[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [selectedApps, setSelectedApps] = useState<ApplicationInterface[]>([]);
  const navigate = useNavigate();

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const serviceUser = new FonctionService(config);
  const serviceApplication = new ApplicationService(config);
  const serviceAccesApplication = new AccesApplicationService(config);

  const getUser = async () => {
    try {
      const response = await serviceUser.getFonction();
      setUser(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getApplications = async () => {
    try {
      const response = await serviceApplication.getApplication();
      setApp(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getApplications();
  }, []);

  const handleChangeCampagne = (selectedOption: any) => {
    setSelectedUser(selectedOption);
    console.log("Utilisateur sélectionné:", selectedOption);
  };

  const handleAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const appId = e.target.value;
    setSelectedApps((prevSelectedApps) =>
      e.target.checked
        ? [...prevSelectedApps, app.find((a) => a.id === appId)!]
        : prevSelectedApps.filter((a) => a.id !== appId)
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!selectedUser) {
      console.log("Aucun utilisateur sélectionné.");
      setLoading(false);
      return;
    }

    const userId = selectedUser.value;

    try {
      // Boucler sur chaque application sélectionnée pour envoyer la requête API
      for (const app of selectedApps) {
        const data: AccesApplicationInterface = {
          id_application: app.id,
          id_user: userId,
        };

        await serviceAccesApplication.postApplicationacces(data);
      }

      // Redirection après succès
      navigate("/viewapplicationuser");
    } catch (error: unknown) {
      console.error("Erreur lors de l'enregistrement:", error);
    } finally {
      setLoading(false);
    }
  };

  const userOptions =
    user?.map((vh) => ({
      label: vh.initule,
      value: vh.id,
    })) || [];

  return (
    <>
      <Otbar title="Espace application et role" />
      <div className="px-8 py-6">
        <div className="border-white m-3 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <h2 className="font-semibold text-xl mb-4">
              Ajouter un role dans une application
            </h2>
            <hr className="mb-4" />
            <div className="mb-4">
              <label
                htmlFor="user-select"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <Select
                id="user-select"
                options={userOptions}
                onChange={handleChangeCampagne}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="applications"
                className="block text-sm font-medium text-gray-700"
              >
                Applications *
              </label>
              <div className="grid gap-3 mt-2">
                {app?.map((e) => (
                  <div key={e.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`app-${e.id}`}
                      value={e.id}
                      onChange={handleAppChange}
                      className="mr-2"
                    />
                    <label htmlFor={`app-${e.id}`} className="text-sm font-medium text-gray-900">
                      {e.titre}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              {loading ? (
                <div className="flex justify-end">
                  <Spinner />
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-lg"
                >
                  Enregistrer
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplicationUser;

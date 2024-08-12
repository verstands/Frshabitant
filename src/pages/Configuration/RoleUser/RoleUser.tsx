import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { RoleInterface } from "../../../Interfaces/RoleInterface";
import RoleService from "../../../Services/Role.service";
import { UserInterface } from "../../../Interfaces/UserInterface";
import { RepositoryConfigInterface } from "../../../Interfaces/RepositoryConfig.interface";
import AgentService from "../../../Services/Agent.service";
import Otbar from "../../../components/Agents/Otbar";
import RoleUserService from "../../../Services/RoleUser.service";
import { AcceRoleInterface } from "../../../Interfaces/AcceRoleInterface";
import Spinner from "../../../components/Spinner";

const RoleUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserInterface[] | null>(null);
  const [role, setRole] = useState<RoleInterface[] | null>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [selectedRoles, setSelectedRoles] = useState<RoleInterface[]>([]);
  const navigate = useNavigate();

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const serviceUser = new AgentService(config);
  const serviceRole = new RoleService(config);
  const serviceRoleUser = new RoleUserService(config);

  const getUser = async () => {
    try {
      const response = await serviceUser.getAgent();
      setUser(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getRole = async () => {
    try {
      const response = await serviceRole.getRole();
      setRole(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getRole();
  }, []);

  const handleChangeUser = (selectedOption: any) => {
    setSelectedUser(selectedOption);
    console.log("Utilisateur sélectionné:", selectedOption);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const roleId = e.target.value;
    setSelectedRoles((prevSelectedRoles) =>
      e.target.checked
        ? [...prevSelectedRoles, role.find((r) => r.id === roleId)!]
        : prevSelectedRoles.filter((r) => r.id !== roleId)
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
      // Boucler sur chaque rôle sélectionné pour envoyer la requête API
      for (const role of selectedRoles) {
        const data: AcceRoleInterface = {
          id_role: role.id,
          id_user: userId,
        };

        await serviceRoleUser.postRoleUser(data);
      }

      // Redirection après succès
      navigate("/viewroleuser");
    } catch (error: unknown) {
      console.error("Erreur lors de l'enregistrement:", error);
    } finally {
      setLoading(false);
    }
  };

  const userOptions =
    user?.map((vh) => ({
      label: vh.prenom + " " + vh.nom,
      value: vh.id,
    })) || [];

  return (
    <>
      <Otbar title="Espace rôle et utilisateur" />
      <div className="px-8 py-6">
        <div className="border-white m-3 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <h2 className="font-semibold text-xl mb-4">
              Ajouter un utilisateur à un rôle
            </h2>
            <hr className="mb-4" />
            <div className="mb-4">
              <label
                htmlFor="user-select"
                className="block text-sm font-medium text-gray-700"
              >
                Noms de l'utilisateur
              </label>
              <Select
                id="user-select"
                options={userOptions}
                onChange={handleChangeUser}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="roles"
                className="block text-sm font-medium text-gray-700"
              >
                Rôles *
              </label>
              <div className="grid gap-3 mt-2">
                {role?.map((e) => (
                  <div key={e.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`role-${e.id}`}
                      value={e.id}
                      onChange={handleRoleChange}
                      className="mr-2"
                    />
                    <label htmlFor={`role-${e.id}`} className="text-sm font-medium text-gray-900">
                      {e.initule}
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

export default RoleUser;

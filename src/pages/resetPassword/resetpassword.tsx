import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import AgentService from "../../Services/Agent.service";

const Resetpassword: React.FC = () => {
  const { email } = useParams<{ id: string; email: string }>();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const agntService = new AgentService(config);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword.length < 5) {
      toast.error("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await agntService.resetPassword(
        String(email),
        newPassword
      );
      toast.success("Votre mot de passe a été réinitialisé avec succès.");
      navigate("/");
    } catch (error) {
      console.error("Une erreur est survenue. Veuillez réessayer.");
    }
  };

   '$2b$10$uT41YVQlyuTYymoLrIzcYOUef9tKHq1hh60llOGARpXRBsQAPSAQi'

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Réinitialisation du mot de passe
        </h2>
        <form onSubmit={handleSubmit} className="mt-6"> 
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-gray-600 text-sm font-medium"
            >
              Nouveau mot de passe
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-600 text-sm font-medium"
            >
              Confirmer le mot de passe
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Réinitialiser le mot de passe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;

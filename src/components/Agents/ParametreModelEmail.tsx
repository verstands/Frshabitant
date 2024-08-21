import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ParametreModelEmail = ({ formData, handleForm2Change } ) => {
  return (
    <>
      <div className="border-white bg-white p-4 rounded-[10px] shadow">
        <h2 className="font-bold">Parametres du mail</h2>

        <div className="w-full mb-6">
          <div className="border-b border-gray-200 pb-2 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="-mb-px flex gap-3" aria-label="Tabs">
                {/* Les éléments de navigation peuvent être ajoutés ici */}
              </nav>
            </div>
          </div>

          <div className="mb-4">
            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Expéditeur : <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="nomexp"
                  id="email"
                  value={formData.nomexp}
                  onChange={handleForm2Change}
                  placeholder="Nom de l'expediteur"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <input
                  type="text"
                  name="emailexp"
                  value={formData.emailexp}
                  onChange={handleForm2Change}
                  id="email"
                  placeholder="Email de l'expediteur"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <br />
            <hr />
            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Expéditeur Distantaire : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="disnataireexp"
                value={formData.disnataireexp}
                onChange={handleForm2Change}
                id="email"
                placeholder=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <br />
            <hr />
            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Expéditeur Cc  : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="ccexp"
                id="email"
                value={formData.ccexp}
                onChange={handleForm2Change}
                placeholder=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <br />
            <hr />
            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Expéditeur Bcc : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="bccexp"
                value={formData.bccexp}
                onChange={handleForm2Change}
                id="email"
                placeholder=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParametreModelEmail;

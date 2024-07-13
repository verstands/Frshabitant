import React, { useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import hasAccess from "../../components/hasAcess";
import { Editor } from 'react-quill';
const Script = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Otbar title="Espace script" />
      {hasAccess("create") && (
        <div className="px-4">
          <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
            <h2 className="font-bold text-[20px]">Creer un script</h2>
            <hr />
            <br />
            <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right">
              Enregistrer
            </button>
            <br />
            <div className="grid md:grid-cols-2 gap-2">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Titre
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Position
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
            
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Script;

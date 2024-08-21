import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const InformationGeneraleEmail = ({ formData, handleChange, handleCheckboxChange }) => {
  return (
    <>
      <div className="border-white bg-white p-4 rounded-[10px] shadow">
        <h2 className="font-bold">Information générales</h2>

        <div className="w-full mb-6">
          <div className="border-b border-gray-200 pb-2 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="-mb-px flex gap-3" aria-label="Tabs">
                {/* Les éléments de navigation peuvent être ajoutés ici */}
              </nav>
            </div>
          </div>

          <div className="mb-4 h-80 overflow-y-auto p-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nom : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nom"
                id="email"
                value={formData.nom}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <br />
            <hr />
            <br />
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Description : <span className="text-red-500">*</span>
              </label>
              <textarea
                id="comment"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
              ></textarea>
            </div>
            <hr />
            <div>
              <label className="inline-flex items-center me-5 cursor-pointer">
                <span className="ms-3 p-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Active
                </span>
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={formData.active}
                  onChange={handleCheckboxChange}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationGeneraleEmail;

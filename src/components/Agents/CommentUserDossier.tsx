import React from "react";
import { FaUserCircle } from "react-icons/fa";

const CommentUserDossier = () => {
  return (
    <div className="border-white bg-white p-4 rounded-[10px] shadow">
      <h2 className="font-bold">Commentaire</h2>

      <div className="w-full mb-6">
        <div className="border-b border-gray-200 pb-2 mb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex gap-3" aria-label="Tabs">
              {/* Les éléments de navigation peuvent être ajoutés ici */}
            </nav>
          </div>
        </div>

        <div className="mb-4 h-80 overflow-y-auto">
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mr-4">
              <FaUserCircle size={30} />
            </div>
            <div className="bg-indigo-100 p-3 rounded-lg shadow-sm w-full">
              <p className="text-gray-700">Un message</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex p-2 gap-2 items-center justify-center">
          <textarea
            id="comment"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
            placeholder="Écrire un commentaire..."
          ></textarea>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentUserDossier;

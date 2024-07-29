import { Link } from "react-router-dom";
import { FaKey, FaSignOutAlt, FaUser } from "react-icons/fa";
import { UserInterface } from "../../Interfaces/UserInterface";
import { useState } from "react";

const Dashboad = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "[]"
  );
  const application = JSON.parse(sessionStorage.getItem("application") || "[]");
  console.log("Application data:", application);

  const handleSearchDette = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[25px] font-bold">Mon reseau habitat</h2>
        <div className="flex items-center">
          <div className="flex mr-1 items-center  text-[12px] font-bold px-4 py-2 rounded shadow">
            <FaKey />
            <Link to="/" className="ml-1 ">
              Mot de pass oublié
            </Link>
          </div>
          <div className="flex mr-1 items-center  text-[12px] font-bold px-4 py-2 rounded shadow">
            <FaUser />
            <Link to="/" className="ml-1 ">
              {user.prenom} {user.nom}
            </Link>
          </div>
          <div className="flex mr-1 items-center  text-[12px] font-bold px-4 py-2 rounded shadow">
            <FaSignOutAlt />
            <Link to="/" className="ml-1 ">
              Se deconnecter
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <div className="w-full max-w-md">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md transition-shadow duration-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Recherche"
            value={searchTerm}
            onChange={handleSearchDette}
          />
        </div>
        <br />
        <div className="flex flex-wrap items-center justify-center gap-2">
          {application
            .filter((data: any) => {
              if (typeof data.application.titre !== "string") {
                return false;
              }
              return data.application.titre
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((e) => (
              <div
                className="border-white h-auto w-40 bg-white p-4 rounded-20 shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform ease-in-out duration-300"
                key={e.application.titre}
              >
                <Link to={e.application && e.application.lien}>
                  <label htmlFor="" className="font-bold block text-center">
                    {e.application && e.application.titre}
                  </label>
                  <img
                    src={e.application && e.application.image}
                    alt=""
                    className="mx-auto mt-2"
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Dashboad;

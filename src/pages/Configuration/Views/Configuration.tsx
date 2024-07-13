import React, { useState } from "react";
import { FaKey, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Configuration = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const application = [
    {
      titre: "Abonnement",
      lien: "/lien",
      image:
        "https://cdn.icon-icons.com/icons2/1130/PNG/512/rsssubscriptioncircularbutton_80240.png",
    },
    {
      titre: "Facture",
      lien: "/lien",
      image: "https://cdn.icon-icons.com/icons2/157/PNG/256/invoice_22150.png",
    },
    {
      titre: "Carte",
      lien: "/lien",
      image:
        "https://cdn.icon-icons.com/icons2/157/PNG/256/master_card_22146.png",
    },
    {
      titre: "Utilisateurs",
      lien: "/user",
      image: "https://cdn.icon-icons.com/icons2/403/PNG/512/users_40493.png",
    },
    {
      titre: "Installateurs",
      lien: "/lien",
      image:
        "https://cdn.icon-icons.com/icons2/4072/PNG/512/save_multimedia_installer_down_arrow_download_icon_258774.png",
    },
    {
      titre: "Provanance",
      lien: "/lien",
      image:
        "https://cdn.icon-icons.com/icons2/2120/PNG/512/location_pin_navigation_destination_maps_icon_131239.png",
    },
    {
      titre: "Type de chauffage",
      lien: "/lien",
      image:
        "https://cdn.icon-icons.com/icons2/38/PNG/512/roomheating_heating_4606.png",
    },
    {
      titre: "Type de revenu",
      lien: "/lien",
      image: "https://cdn.icon-icons.com/icons2/1430/PNG/256/dollars_98561.png",
    },
    {
      titre: "Ville",
      lien: "/lien",
      image:
        "https://cdn.icon-icons.com/icons2/2357/PNG/512/apartment_building_buildings_city_icon_143303.png",
    },
    {
      titre: "Applications",
      lien: "/lien",
      image:
        "https://cdn.icon-icons.com/icons2/54/PNG/256/installation_application_software_10810.png",
    },
    {
      titre: "Privilege  App",
      lien: "/lien",
      image:
        "https://cdn.icon-icons.com/icons2/1626/PNG/512/3775732-access-padlock-passkey-password-security_108981.png",
    },
    {
      titre: "Privilege",
      lien: "/lien",
      image:
        "https://cdn.icon-icons.com/icons2/1626/PNG/512/3775732-access-padlock-passkey-password-security_108981.png",
    },
  ];

  const handleSearchDette = (event: object) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <br />
      <Link to="/dashboard" className="p-5">
        <div className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-left">
          <FaSignOutAlt className="bg-white  p-1 rounded-[50%] text-[#1e58c1]" />
          <p className=" text-white">Retour</p>
        </div>
      </Link>
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
            .filter((data) => {
              if (typeof data.titre !== "string") {
                return false;
              }
              return data.titre
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((e) => (
              <div
                className="border-white h-auto w-40 bg-white p-4 rounded-10 shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform ease-in-out duration-300"
                key={e.titre}
              >
                <Link to={e.lien}>
                  <label htmlFor="" className="font-bold block text-center">
                    {e.titre}
                  </label>
                  <img src={e.image} alt="" className="mx-auto mt-2" />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Configuration;

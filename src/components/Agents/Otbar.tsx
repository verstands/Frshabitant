import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import { FaBars, FaPhone, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserInterface } from "../../Interfaces/UserInterface";

interface OtbarProps {
  title: string;
}

const Otbar: React.FC<OtbarProps> = ({ title }) => {
  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "{}"
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <div>
            <FaBars />
          </div>
          <h2 className="text-[18px] font-bold">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[12px] mr-1 font-bold flex items-center gap-2 ">
            <FaPhone className="text-green-500" />
            <span className="text-green-500 cursor-pointer">
              WebPhone
            </span>
          </div>
          <div className="text-[12px] mr-1 font-bold ">
            <Link to="/">
              <FaSearch className="font-bold size-4" />
            </Link>
          </div>
          <div className="text-[12px] mr-1 font-bold px-2 ">
            <span>
              <BiBell className="font-bold size-4" />
            </span>
          </div>
          <div className="flex items-center gap-2 relative">
            <div
              className="text-[12px] bg-[#c5d8ea] border-[#c5d8ea] rounded-[50%] mr-1 font-bold px-2 py-2 cursor-pointer"
              onClick={handleDropdownToggle}
            >
              <h2>
                {user.prenom?.charAt(0)}
                {user.nom?.charAt(0)}
              </h2>
            </div>
            <div className="font-bold uppercase cursor-pointer" onClick={handleDropdownToggle}>
              {user.prenom} {user.nom}
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Paramètres
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        sessionStorage.removeItem("user");
                        window.location.reload(); // Redirect or perform logout action
                      }}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                      Déconnexion
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="py-2" />
    </>
  );
};

export default Otbar;

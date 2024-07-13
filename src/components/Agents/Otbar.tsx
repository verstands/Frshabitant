import React from "react";
import { BiBell } from "react-icons/bi";
import { FaPhone, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserInterface } from "../../Interfaces/UserInterface";

interface OtbarProps {
  title: string;
}
const Otbar: React.FC<OtbarProps> = ({ title }) => {
  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "[]"
  );

  return (
    <>
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[18px] font-bold">{title}</h2>
        <div className="flex items-center gap-2">
          <div className="text-[12px] mr-1 font-bold flex  items-center gap-2 ">
            <FaPhone className="text-green-500" />
            <Link to="/" className="text-green-500">
              WebPhone
            </Link>
          </div>
          <div className="text-[12px] mr-1 font-bold ">
            <Link to="/">
              <FaSearch className="font-bold size-4" />
            </Link>
          </div>
          <div className="text-[12px] mr-1 font-bold px-2 ">
            <Link to="/">
              <BiBell className="font-bold size-4" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[12px] bg-[#c5d8ea] border-[#c5d8ea] rounded-[50%] mr-1 font-bold px-2 py-2">
              <h2>
                {user.prenom.charAt(0)}
                {user.nom.charAt(0)}
              </h2>
            </div>
            <div>
              {user.prenom} {user.nom}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otbar;

import React, { useEffect, useState } from "react";
import { BiBell } from "react-icons/bi";
import {
  FaBars,
  FaPhone,
  FaSearch,
  FaSignInAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserInterface } from "../../Interfaces/UserInterface";
import socket from "../../Services/Notification.service";
import ProspectService from "../../Services/Prospect.service";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";

interface OtbarProps {
  title: string;
  data?: DataItem[];
}

interface DataItem {
  id: number;
  name: string;
  description: string;
}

interface Notification {
  title: string;
  description: string;
  id: string;
}

const Otbar: React.FC<OtbarProps> = ({ title, data = [] }) => {
  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "{}"
  );
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpenPhoneRdv, setIsOpenPhoneRdv] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpenNotification, setIsDropdownOpenNotification] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultData, setProspect] = useState<ProspectInterface[] | null>(null);
  const [filteredData, setFilteredData] = useState<DataItem[]>(data);

  // Données par défaut pour tester la recherche

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const serviceProspect = new ProspectService(config);

  const getProspect = async () => {
    try {
      const response = await serviceProspect.getProspect();
      setProspect(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProspect();
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownToggle1 = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      setIsDropdownOpen1(true);
      setIsDropdownOpen(false);
      setIsOpenPhoneRdv(false);
      setIsDropdownOpenNotification(false);
    } else {
      setIsDropdownOpen1(false);
    }
  };

  const handleDropdownToggleNotification = () => {
    setIsDropdownOpenNotification(!isDropdownOpenNotification);
  };

  const Deconnexion = () => {
    navigate("/");
    sessionStorage.clear();
  };

  useEffect(() => {
    const savedNotifications = JSON.parse(sessionStorage.getItem("notifications") || "[]");
    setNotifications(savedNotifications);
  
    socket.on("notify", (notification: Notification) => {
      const newNotifications = [...notifications, notification];
      setNotifications(newNotifications);
      sessionStorage.setItem("notifications", JSON.stringify(newNotifications));
    });
  
    return () => {
      socket.off("notify");
    };
  }, [notifications]);

  const handleToggleModal = () => {
    setIsOpenPhoneRdv(!isOpenPhoneRdv);
  };

  const handleSearchDette = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const notificationCount = notifications.length;
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
          <div className="text-[12px] mr-1 font-bold flex items-center gap-2">
            <FaPhone className="text-green-500" />
            <span className="text-green-500 cursor-pointer">WebPhone</span>
          </div>
          <div className="text-[12px] relative mr-1 font-bold">
            <input
              type="search"
              placeholder="Recherche"
              value={searchTerm}
              onChange={handleDropdownToggle1}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {isDropdownOpen1 && (
              <div
                className="absolute right-0 w-48  bg-white border border-gray-200 rounded-lg shadow-lg z-50 "
                style={{ width: "210px" }}
              >
                <div className="py-2">
                  <div className="overflow-y-auto max-h-80">
                    {" "}
                    <ul>
                      {Array.isArray(defaultData) &&
                        defaultData
                          .filter((data) => {
                            if (typeof data.nom !== "string") {
                              return false;
                            }
                            return data.nom
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase());
                          })
                          .map((item, index) => (
                            <a href={`/appels/${item.id}`} className="bg-gray-400">
                              <li key={index} className="py-2 px-2 border-b">
                                <h3 className="font-bold">{item.nom}</h3>
                                <p>{item.email}</p>
                              </li>
                            </a>
                          ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <div className="flex items-center">
              <div className="text-[12px] mr-1 font-bold px-2">
                <BiBell
                  className="font-bold size-4 cursor-pointer"
                  color={isDropdownOpenNotification ? "blue" : ""}
                  onClick={handleDropdownToggleNotification}
                />
                {notificationCount > 0 && (
                  <span
                    className="absolute top-0 right-0 cursor-pointer inline-flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs font-bold rounded-full"
                    onClick={handleDropdownToggleNotification}
                  >
                    {notificationCount}
                  </span>
                )}
              </div>
            </div>
            {isDropdownOpenNotification && (
              <div
                className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                style={{ width: "450px" }}
              >
                <ul className="py-2">
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <div className="font-bold cursor-pointer">
                      Notifications
                    </div>
                  </li>
                  <hr />
                  {notifications.map((notification, index) => (
                    <li key={index}>
                      <Link
                        to={`/appels/${notification.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        <div className="flex items-center justify-center gap-5">
                          <div className="border border-blue-500 p-3 rounded-full bg-blue-500">
                            <BiBell color="white" />
                          </div>
                          <div>
                            <span className="text-blue-800 font-bold">
                              {notification.title}
                            </span>
                            <br />
                            <span className="font-normal">
                              {notification.description}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div className="flex items-center">
              <div
                className="text-[12px] bg-[#c5d8ea] border-[#c5d8ea] rounded-[50%] mr-1 font-bold px-2 py-2 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                <h2>
                  {user.prenom?.charAt(0)}
                  {user.nom?.charAt(0)}
                </h2>
              </div>
              <div
                className="font-bold uppercase cursor-pointer"
                onClick={handleDropdownToggle}
              >
                {user.prenom} {user.nom}
              </div>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <div className="font-bold uppercase cursor-pointer">
                      {user.prenom} {user.nom}
                    </div>
                    <span>{user.email}</span>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <FaUserCircle />
                        <span>Configuration</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={Deconnexion}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                      <div className="flex items-center gap-2">
                        <FaSignInAlt />
                        <span>Déconnexion</span>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="py-2" />
      {isOpenPhoneRdv && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-60"></div>
          <div
            className={`bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-lg transition-transform duration-300 ease-in-out transform ${
              filteredData.length === 0 ? "scale-95" : "scale-100"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span
                className="font-bold cursor-pointer"
                onClick={handleToggleModal}
              >
                ×
              </span>
            </div>

            <div className="mb-4">
              <input
                type="search"
                placeholder="Rechercher prospect..."
                value={searchTerm}
                onChange={handleSearchDette}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>

            <div className="overflow-y-auto max-h-80">
              {" "}
              <ul>
                {Array.isArray(defaultData) &&
                  defaultData
                    .filter((data) => {
                      if (typeof data.nom !== "string") {
                        return false;
                      }
                      return data.nom
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
                    })
                    .map((item, index) => (
                      <Link to={`/appels/${item.id}`}>
                        <li key={index} className="py-2 border-b">
                          <h3 className="font-bold">{item.nom}</h3>
                          <p>{item.email}</p>
                        </li>
                      </Link>
                    ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Otbar;

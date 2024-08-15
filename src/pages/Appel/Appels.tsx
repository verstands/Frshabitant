import React from "react";
import Otbar from "../../components/Agents/Otbar";
import {
  FaClock,
  FaMicrophone,
  FaMicrophoneSlash,
  FaPause,
  FaPencilAlt,
  FaPhone,
  FaPhoneAlt,
  FaPhoneSlash,
  FaTimes,
  FaUser,
  FaUserPlus,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import Discours from "../../components/Agents/Discours";
import DetailProspect from "../../components/Agents/DetailProspect";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ProspectService from "../../Services/Prospect.service";
import { useParams } from "react-router-dom";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { UserInterface } from "../../Interfaces/UserInterface";
import Commentaire from "../../components/Agents/Commentaire";
import { toast } from "react-toastify";
import { AgendaInterface } from "../../Interfaces/AgendaInterface";
import AgendaService from "../../Services/Agenda.service";
import CommentaireAgent from "../../components/Agents/CommentaireAgent";
import DetailProspect2 from "../../components/DetailProspect2";

const Appels: React.FC = () => {
  const [prospect, setProspect] = useState<ProspectInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const { idcampagne } = useParams<{ id: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isOpenPhone, setIsOpenPhone] = useState(false);
  const [isOpenPhoneRdv, setIsOpenPhoneRdv] = useState(false);

  const idprospect = prospect?.id;

  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "[]"
  );

  const [agenda, setAgenda] = useState<AgendaInterface>({
    start: "",
    end: "2024-07-15T12:30:00",
    title: "A rappeler",
    id_postect: idprospect,
    id_user: `${user.id}`,
  });

  //pour les appels
  const [isMuted, setIsMuted] = useState(false);
  const [started, setStarted] = useState(0);
  const [callStartTime, setCallStartTime] = useState<Date | null>(null);
  const [callTimer, setCallTimer] = useState<number | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [callDuration, setCallDuration] = useState("");

  const callButtonText = "Call";
  const hangupButtonText = "Hangup";
  const callButtonColor = "#43b61b";
  const hangupButtonColor = "#e83232";
  const muteButtonText = "Mute";
  const muteButtonColor = "#ffa500";

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleAppelModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const serviceProspect = new ProspectService(config);
  const serviceAgentda = new AgendaService(config);

  const getProspectId = async () => {
    try {
      const response = await serviceProspect.getProspectId(id!);
      setProspect(response.data);
      setLoading(false);
      setAgenda({
        ...agenda,
        id_postect: response.data.id,
      });
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getProspectIdCampagne = async () => {
    try {
      const response = await serviceProspect.getOneCampagne(idcampagne!);
      setProspect(response.data);
      setLoading(false);
      setAgenda({
        ...agenda,
        id_postect: response.data.id,
      });
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getProspectNonId = async () => {
    try {
      const response = await serviceProspect.getOne();
      setProspect(response.data);
      setLoading(false);
      setAgenda({
        ...agenda,
        id_postect: response.data.id,
      });
      setIsOpenPhone(true);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAgenda({ ...agenda, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      try {
        const response = await serviceAgentda.postAgenda(agenda);
        setIsOpen(false);
        toast.success("rappel a été ajouté dans l'agenda");
      } catch (error) {
        console.log("Error creating prospect:", error);
      }
    } catch (error: unknown) {
      console.log("Error creating prospect:", error);
    }
  };

  const BtnNRP = async (ids: string) => {
    try {
      const response = await serviceProspect.updataNRP(ids);
      window.location.reload();
      handleToggleModal();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const BtnNOnValide = async (ids: string) => {
    try {
      const response = await serviceProspect.updataNonValide(ids);
      window.location.reload();
      handleToggleModal();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const BtnRDV = async (ids: string) => {
    try {
      const response = await serviceProspect.updataRDV(ids);
      window.location.reload();
      handleToggleModal();
    } catch (error: unknown) {
      console.log(error);
    }
  };
  const BtnPasInteresse = async (ids: string) => {
    try {
      const response = await serviceProspect.updataPasInteresse(ids);
      window.location.reload();
      handleToggleModal();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const BtnNPP = async (ids: string) => {
    try {
      const response = await serviceProspect.updataNPP(ids);
      window.location.reload();
      handleToggleModal();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const BtnMN = async (ids: string) => {
    try {
      const response = await serviceProspect.updataMN(ids);
      window.location.reload();
      handleToggleModal();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const BtnFL = async (ids: string) => {
    try {
      const response = await serviceProspect.updataFL(ids);
      window.location.reload();
      handleToggleModal();
    } catch (error: unknown) {
      console.log(error);
    }
  };
  //comment tenir une conversation

  useEffect(() => {
    if (id) {
      getProspectId();
    }else if(idcampagne){
      getProspectIdCampagne();
    }
     else {
      getProspectNonId();
    }
  
    const script = document.createElement("script");
    script.src = "/webphone/webphone_api.js";
    script.async = true;
  
    script.onload = () => {
      (window as any).webphone_api.parameters = {
        serveraddress: "188.165.55.170",
        username: "8019",
        password: "goautodial",
      };
  
      /*(window as any).webphone_api.onRegistered = () => {
        console.log("Webphone registered successfully");
        setStarted(2);
      };
  
      (window as any).webphone_api.onError = (error: any) => {
        console.error("Webphone error: ", error);
        displayStatus("ERROR: " + error);
      };
  
      (window as any).webphone_api.onCallStateChange((status: string) => {
        if (status === "setup") {
          setButtonState(true);
        } else if (status === "connected") {
          setCallStartTime(new Date());
          startCallTimer();
          displayStatus("Call connected");
        } else if (status === "disconnected") {
          stopCallTimer();
          displayFinalCallDuration();
          setButtonState(false);
          resetMuteButton();
        }
      });*/
  
      if (prospect?.telephone) {
        makeCall(); 
      }
  
      (window as any).webphone_api.start();
    };
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, prospect?.telephone]);
  

  const makeCall = () => {
    const number = prospect?.telephone
    if (number) {
      if (webphone_api.isincall()) {
        webphone_api.hangup();
        alert(number)
      } else {
        webphone_api.call(number);
      }
    } else {
      alert("Please enter a phone number.");
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      webphone_api.setparameter("enablemicrophone", true);
      setIsMuted(false);
    } else {
      webphone_api.setparameter("enablemicrophone", false);
      setIsMuted(true);
    }
  };

  const setButtonState = (isInCall: boolean) => {
    const callButton = document.getElementById(
      "callButton"
    ) as HTMLButtonElement;
    const muteButton = document.getElementById(
      "muteButton"
    ) as HTMLButtonElement;

    if (isInCall) {
      callButton.innerHTML = hangupButtonText;
      callButton.style.backgroundColor = hangupButtonColor;
      muteButton.style.display = "inline-block";
    } else {
      callButton.innerHTML = callButtonText;
      callButton.style.backgroundColor = callButtonColor;
      muteButton.style.display = "none";
    }
  };

  const resetMuteButton = () => {
    const muteButton = document.getElementById(
      "muteButton"
    ) as HTMLButtonElement;
    setIsMuted(false);
    muteButton.innerHTML = muteButtonText;
    muteButton.style.backgroundColor = muteButtonColor;
  };

  const displayStatus = (message: string) => {
    setStatusMessage(message);
  };

  const startCallTimer = () => {
    setCallTimer(
      window.setInterval(() => {
        if (callStartTime) {
          const now = new Date();
          const duration = Math.floor(
            (now.getTime() - callStartTime.getTime()) / 1000
          );
          setCallDuration(formatDuration(duration));
        }
      }, 1000)
    );
  };

  const stopCallTimer = () => {
    if (callTimer) {
      clearInterval(callTimer);
      setCallTimer(null);
    }
  };

  const displayFinalCallDuration = () => {
    if (callStartTime) {
      const now = new Date();
      const duration = Math.floor(
        (now.getTime() - callStartTime.getTime()) / 1000
      );
      setCallDuration("Final call duration: " + formatDuration(duration));
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins + "m " + secs + "s";
  };

  const appel = () => {
    Swal.fire({
      icon: "question",
      title: "Êtes-vous prêt ?",
      text: "Les appels automatiques vont commencer",
      confirmButtonText: "C'est parti",
    }).then((result) => {
      if (result.isConfirmed) {
        handleToggleModal();
        if(!isOpenPhone){
          if (prospect?.telephone) {
            makeCall(); 
            startCallTimer();
          }
        }
      }
    });
  };

  const handleToggleModal = () => {
    setIsOpenPhone(!isOpenPhone);
  };

  const handleToggleModalRdv = () => {
    setIsOpenPhoneRdv(!isOpenPhoneRdv);
  };
  return (
    <>
      <Otbar title="Robot d'appel automatique " />
      {isOpenPhone && (
        <div className="p-4">
          <div className="flex flex-col items-center p-5 rounded-xl shadow-lg  relative overflow-hidden bg-gradient-to-r from-blue-500 to-pink-500 bg-[length:200%_200%] animate-[gradientAnimation_10s_ease_infinite]">
            <div className="text-center mb-4 text-white">
              <div className="text-xl font-bold mb-1">{prospect.nom}</div>
              <div className="text-lg font-normal text-blue-100">
                +{prospect.telephone}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="text-xl mr-5 font-bold text-white">{callDuration}</div>
              <div className="px-4 py-2 bg-black bg-opacity-30 rounded-xl text-lg font-semibold animate-[pulsate_1.5s_infinite]">
                Appel en cours
              </div>
            </div>
            <div className="flex justify-center gap-2 w-full max-w-2xl">
              <button
                className="flex items-center justify-center hover:bg-red-500 hover:text-white bg-white w-16 h-16 rounded-full text-2xl transition duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Raccrocher l'appel"
                onClick={handleToggleModal}
              >
                <FaPhoneSlash />
              </button>
              <button
                className="flex items-center justify-center hover:bg-red-500 hover:text-white bg-white w-16 h-16 rounded-full text-2xl transition duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Raccrocher l'appel"
              >
                <FaMicrophoneSlash />
              </button>
              <button
                className="flex items-center justify-center hover:bg-red-500 hover:text-white bg-white w-16 h-16 rounded-full text-2xl transition duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Transférer l'appel"
              >
                <FaUser />
                <span className="ml-2 hidden">Transfert</span>
              </button>
              <button
                className="flex items-center justify-center hover:bg-yellow-500 hover:text-white bg-white w-16 h-16 rounded-full text-2xl transition duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Mettre en attente"
              >
                <FaPause />
                <span className="ml-2 hidden">Attente</span>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="border-white bg-white p-4 m-3 rounded-[10px] shadow flex items-center justify-between">
        <div
          onClick={() => appel()}
          className=" cursor-pointer text-[#6c7ec2] border-[#e7edfe] flex items-center gap-2 p-4 rounded-[10px] bg-[#e7edfe]"
        >
          <p>Démarrer un appel avec ce prospect</p>
          <FaPhoneAlt />
        </div>
        <div className="">
          <p>
            <strong>Date de création : </strong> 11/12/2023 12:22:45
          </p>
          <p className="flex gap-2">
            <strong>A rappeler : </strong> 11/12/2023 12:22:45{" "}
            <FaPencilAlt className=" text-[#6c7ec2] cursor-pointer " />
          </p>
          <p>
            <strong>Status : </strong> A rappeler
          </p>
          <p>
            <strong>Agent : </strong>
            {user.prenom} {user.nom}
          </p>
          <p>
            <strong>Campagne : </strong>{" "}
            {prospect?.capagnepospect && prospect?.capagnepospect.titre}
          </p>
        </div>
      </div>
      <div className=" p-4">
        <div className="flex items-center mb-2">
          <div className="bg-[#29b765] rounded-l-[10px] p-12 flex items-center flex-grow-0">
            <FaClock className="text-white" />
          </div>
          <div className="bg-[#d1e6dd] rounded-r-[10px] p-3 flex-grow">
            <p>
              <strong>Rendez-vous </strong>- cet appel est un appel programmé
              dans votre agenda
            </p>
            <br />
            <button
              className="text-white bg-[#f85153] p-2 rounded-[8px]"
              onClick={toggleModal}
            >
              Rappeler plus tard
            </button>
          </div>
        </div>

        <div className="border-white h-[50%] bg-white p-4 rounded-[10px] shadow">
          <h2 className="font-bold">Actions rapides</h2>
          <div className="flex items-center">
            <div className="bg-[#56c3ee] rounded-l-[10px] p-7 flex items-center flex-grow-0">
              <FaClock className="text-white" />
            </div>
            <div className="bg-[#d1e6dd] rounded-r-[10px] p-3 flex-grow">
              <p className="text-[#1d59cc]">
                <strong>Help #1 </strong>Ces boutons permettent de changer le
                statut du prospect en 1 clic
              </p>
              <p className="text-[#1d59cc]">
                <strong>Help #2 </strong>Ex : "RDV" : Change le statut en "RDV",
                crée un lead, puis passe au prospect suivant{" "}
              </p>
            </div>
          </div>
          <hr />
          <div className="mt-6 flex gap-1 items-center">
            <button
              className="bg-[#f2c231] rounded-[7px] p-2"
              title="Non repondu"
              onClick={() => BtnNRP(prospect?.id)}
            >
              NRP
            </button>
            <button
              className="bg-[#20b669] rounded-[7px] p-2 text-white"
              title="Rendez-vous"
              onClick={() => handleToggleModalRdv()}
            >
              RDV
            </button>
            <button
              className="bg-[#eb5c56] rounded-[7px] p-2 text-white"
              title="Non valide"
              onClick={() => BtnNOnValide(prospect?.id)}
            >
              Non valide
            </button>
            <button
              className="bg-[#eb5c56] rounded-[7px] p-2 text-white"
              title="Non valide"
              onClick={() => BtnPasInteresse(prospect?.id)}
            >
              Pas interéssé
            </button>
            <button
              className="bg-[#eb5c56] rounded-[7px] p-2 text-white"
              title="Non valide"
              onClick={() => BtnNPP(prospect?.id)}
            >
              Ne pas appeller
            </button>
            <button
              className="bg-gray-500 rounded-[7px] p-2 text-white"
              title="Non valide"
              onClick={() => BtnMN(prospect?.id)}
            >
              Mauvais numéro
            </button>
            <button
              className="bg-blue-500 rounded-[7px] p-2 text-white"
              title="Non valide"
              onClick={() => BtnFL(prospect?.id)}
            >
              Faux lead
            </button>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-2 gap-2">
          {prospect && <Discours datadata={prospect} />}
          <div>
            {prospect && <DetailProspect2 data={prospect} />}
            {user.statut !== "0" && prospect && <CommentaireAgent />}
          </div>
        </div>
        <br />
        <div className="">
          {prospect && <Commentaire datadata={prospect} />}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form onSubmit={handleSubmit}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-lg">
              <h3 className="text-2xl font-bold">Rappeler plus tard</h3>
              <p className="mt-2">
                Voulez-vous programmer un rappel pour ce prospect ?
              </p>
              <br />
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Date
                </label>
                <input
                  type="datetime-local"
                  name="start"
                  value={agenda.start}
                  onChange={handleChange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  onClick={toggleModal}
                >
                  Annuler
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  type="submit"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {isOpenPhoneRdv && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-lg">
            <br />
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Commentaire
              </label>
              <textarea
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleToggleModalRdv}
              >
                Annuler
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                type="submit"
                onClick={() => BtnRDV(prospect?.id)}
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      )}

      {/* isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div
            className={`relative bg-gray-800 text-white p-6 rounded-lg shadow-lg w-4/5 max-w-lg transform transition-transform duration-300 ease-in-out ${
              isOpenPhone ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-white transition duration-300"
              onClick={handleToggleModal}
            >
              <FaTimes size={20} />
            </button>
            <div className="flex flex-col items-center">
              <div className="bg-gray-600 rounded-full p-6">
                <FaUserPlus className="text-6xl text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold mt-4">{prospect.nom}</h3>
              <p className="mt-2">Appel en cours...</p>
              <p className="mt-2">10:30:12</p>
              <div className="flex mt-6 space-x-4">
                <button className="bg-gray-700 p-3 rounded-full">
                  <FaVideo className="text-white" />
                </button>
                <button className="bg-gray-700 p-3 rounded-full">
                  <FaMicrophone className="text-white" />
                </button>
                <button className="bg-red-600 p-3 rounded-full">
                  <FaPhoneSlash className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )*/}
    </>
  );
};

export default Appels;

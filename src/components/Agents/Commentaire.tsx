import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { UserInterface } from "../../Interfaces/UserInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import CommentaireService from "../../Services/Commentaire.service";
import { CommenatareInterface } from "../../Interfaces/CommentaireInterface";
import prospect from "../../pages/Prospect/prospect";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import PieceJointUser from "./PieceJointUser";

type Tab = "tab1" | "tab2" | "tab3" | "tab4" | "tab5" | "tab6" | "tab7";

interface DetailProspectProps {
  datadata: CommenatareInterface;
}
const Commentaire: React.FC<DetailProspectProps> = ({ datadata }) => {
  const [activeTab, setActiveTab] = useState<Tab>("tab1");
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);
  const [commentaire, setcommentaire] = useState<CommenatareInterface[] | null>(
    null
  );

  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "[]"
  );

  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingBtn(true);
    if (comment.trim()) {
      const newComment: CommenatareInterface = {
        id_prospect: `${datadata.id}`,
        id_user: `${user.id}`,
        message: comment,
      };
      setComments([...comments, comment]);
      try {
        await serviceCommentaire.postCommentaire(newComment);
        setLoadingBtn(false);
        getCommentaire();
      } catch (error: unknown) {
        console.log("Error creating prospect:", error);
        setLoadingBtn(false);
      }
      setComment("");
    }
  };

  const getCommentaire = async () => {
    try {
      const response = await serviceCommentaire.getCommentaire(
        user.id,
        datadata.id
      );
      setcommentaire(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.error("Error fetching comments:", error);
    }
  };

  const serviceCommentaire = new CommentaireService(config);

  useEffect(() => {
    getCommentaire();
  }, []);

  return (
    <div className="border-white  bg-white p-4 rounded-[10px] shadow">
      <div className="w-full">
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex gap-12" aria-label="Tabs">
              <button
                onClick={() => handleTabClick("tab1")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab1"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Actions rapides
              </button>
              <button
                onClick={() => handleTabClick("tab2")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab2"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Historique
              </button>
              <button
                onClick={() => handleTabClick("tab3")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab3"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Enregistrement
              </button>
              <button
                onClick={() => handleTabClick("tab4")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab4"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Appels
              </button>
              <button
                onClick={() => handleTabClick("tab5")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab5"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Commentaire
              </button>
              <button
                onClick={() => handleTabClick("tab6")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab6"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Calendrier
              </button>
              <button
                onClick={() => handleTabClick("tab7")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab7"
                    ? "border-indigo-500 text-indigo-600 bg-indigo-300 rounded-t-[15px]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Pieces Joint
              </button>
            </nav>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
          {activeTab === "tab1" && (
            <div className="mt-6 flex gap-1 items-center">
            <button
              className="bg-[#f2c231] rounded-[7px] p-2"
              title="Non repondu"
            >
              NRP
            </button>
            <button
              className="bg-[#20b669] rounded-[7px] p-2 text-white"
              title="Rendez-vous"
            >
              RDV
            </button>
            <button
              className="bg-[#eb5c56] rounded-[7px] p-2 text-white"
              title="Non valide"
            >
              Non valide
            </button>
            <button
              className="bg-[#eb5c56] rounded-[7px] p-2 text-white"
              title="Non valide"
            >
              Pas interéssé
            </button>
            <button
              className="bg-[#eb5c56] rounded-[7px] p-2 text-white"
              title="Non valide"
            >
              Ne pas appeller
            </button>
            <button
              className="bg-gray-500 rounded-[7px] p-2 text-white"
              title="Non valide"
            >
              Mauvais numéro
            </button>
            <button
              className="bg-blue-500 rounded-[7px] p-2 text-white"
              title="Non valide"
            >
              Faux lead
            </button>
          </div>
          )}
          {activeTab === "tab2" && (
            <div>
              <h2 className="font-bold">{datadata.nom}</h2>
              <p>Statut: Nouveau = NRP</p>
              <p>Compteur NRP: 0 = 1</p>
              <p>CountNrpTotal : 0 = 1</p>
            </div>
          )}
          {activeTab === "tab3" && <div>Contenu du Tab 3</div>}
          {activeTab === "tab4" && <div>Contenu du Tab 4</div>}
          {activeTab === "tab5" && (
            <div>
              <div className="mb-4 h-96 overflow-y-scroll ">
                {commentaire?.map((ab) => (
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg shadow-sm w-full">
                      <p className="text-gray-700">{ab.message}</p>
                    </div>
                    <div className="flex-shrink-0 mr-4">
                      <FaUserCircle size={30} />
                    </div>
                    <br />
                  </div>
                ))}
              </div>
              <form onSubmit={handleCommentSubmit} className="mb-4">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  value={comment}
                  onChange={handleCommentChange}
                  placeholder="Écrire un commentaire..."
                />
                {loadingBtn ? (
                  <Spinner />
                ) : (
                  <button
                    type="submit"
                    className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                  >
                    Soumettre
                  </button>
                )}
              </form>
            </div>
          )}
          {activeTab === "tab6" && <div>Contenu du Tab 6</div>}
          {activeTab === "tab7" && <div> <PieceJointUser data={datadata} /></div>}
        </div>
      </div>
    </div>
  );
};

export default Commentaire;

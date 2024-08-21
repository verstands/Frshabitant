import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CommenatareInterface } from "../../Interfaces/CommentaireInterface";
import { UserInterface } from "../../Interfaces/UserInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import CommentaireService from "../../Services/Commentaire.service";
import Spinner from "../Spinner";

interface DetailProspectProps {
  datadata: CommenatareInterface;
}
const CommentUserDossier: React.FC<DetailProspectProps> = ({ datadata }) => {
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

  const getCurrentDateTime = (): string => {
    const now = new Date();
    return now.toLocaleString(); // Format date/heure local
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
        date: getCurrentDateTime()
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
    <div className="border-white bg-white p-4 rounded-[10px] shadow">
      <h2 className="font-bold">Commentaire </h2>

      <div className="w-full mb-6">
        <div className="border-b border-gray-200 pb-2 mb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex gap-3" aria-label="Tabs">
              {/* Les éléments de navigation peuvent être ajoutés ici */}
            </nav>
          </div>
        </div>
        <div>
          <div className="mb-4 h-96 overflow-y-scroll ">
          <div className="mb-4 h-96 overflow-y-scroll">
                {commentaire?.map((ab) => (
                  <div key={ab.id} className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <FaUserCircle size={40} className="text-indigo-500" />
                    </div>
                    <div className="bg-indigo-100 p-3 rounded-lg shadow-sm w-full">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-indigo-700">{ab.user?.prenom} {ab.user?.nom}
                      </p>
                        <span className="text-xs text-gray-500">{ab.date}</span>
                      </div>
                      <p className="text-gray-700 mt-2">{ab.message}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                Envoyer
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentUserDossier;

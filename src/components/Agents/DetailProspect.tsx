import { FaEdit, FaEnvelope, FaSms, FaVoicemail } from "react-icons/fa";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import { useState } from "react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { toast } from "react-toastify";
import ProspectService from "../../Services/Prospect.service";
import ReactQuill from "react-quill";
import { ScriptInterface } from "../../Interfaces/ScriptInterface";

interface DetailProspectProps {
  data: ProspectInterface;
}

const DetailProspect: React.FC<DetailProspectProps> = ({ data }) => {
  const [prospect, setProspect] = useState<ProspectInterface>(data);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<ScriptInterface>({
    titre: "",
    contenue: "",
    position: "",
  });

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProspect({ ...prospect, [name]: value });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const serviceCommentaire = new ProspectService(config);

  const handleCommentSubmitUpdata = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingBtn(true);
    const newComment: ProspectInterface = {
      status: `${prospect.status}`,
      nom: `${prospect.nom}`,
      email: `${prospect.email}`,
      telephone: `${prospect.telephone}`,
      adresse: `${prospect.adresse}`,
      ville: `${prospect.ville}`,
      codepostal: `${prospect.codepostal}`,
      surface: `${prospect.surface}`,
      id_typechauffage: `${prospect.id_typechauffage}`,
      id_typerevenu: `${prospect.id_typerevenu}`,
      prenom: `${prospect.prenom}`,
      code: `${prospect.code}`,
      id_user: `${prospect.id_user}`,
      id_campagne: `${prospect.id_campagne}`,
      id_produit: `${prospect.id_produit}`,
    };
    try {
      await serviceCommentaire.updateProspect(String(data.id), newComment);
      setLoadingBtn(false);
      toast.success("modification a été fait avec success !!!");
    } catch (error: unknown) {
      console.log("Error creating prospect:", error);
      setLoadingBtn(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleDescriptionChange = (value: string) => {
    setUserInfo((prevState) => ({
      ...prevState,
      contenue: value,
    }));
  };
  return (
    <>
      <div className="border-white  bg-white p-4 rounded-[10px] shadow">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">Prospect n°{data.code}</h2>
            <p className="text-gray-500">Detail de votre prospect</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="bg-[#1d59cc] p-2 rounded-[5px] text-white flex items-center gap-1"
              onClick={handleCommentSubmitUpdata}
            >
              <FaEdit />
              Modifier
            </button>
            <button
              className="bg-[#1d59cc] p-2 rounded-[5px] text-white flex items-center gap-1"
              onClick={toggleModal}
            >
              <FaEnvelope />
              Email
            </button>
            <button className="bg-[#1d59cc] p-2 rounded-[5px] text-white flex items-center gap-1">
              <FaSms />
              Sms
            </button>
          </div>
        </div>
        <br />
        <hr />
        <div className="grid md:grid-cols-2 gap-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Statut
            </label>
            <input
              type="text"
              name="status"
              value={data.status}
              onChange={handleChange}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Nom
            </label>
            <input
              type="text"
              name="nom"
              value={prospect.nom}
              onChange={handleChange}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              value={prospect.email}
              onChange={handleChange}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Telephone
            </label>
            <input
              type="text"
              name="telephone"
              value={prospect.telephone}
              onChange={handleChange}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Adresse
            </label>
            <input
              type="text"
              name="adresse"
              id="adresse"
              value={prospect.adresse}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Ville
            </label>
            <input
              type="text"
              name="ville"
              id="ville"
              value={prospect.ville}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Code postal
            </label>
            <input
              type="text"
              name="codepostal"
              id="codepostal"
              value={prospect.codepostal}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Surface
            </label>
            <input
              type="text"
              name="surface"
              id="email"
              value={prospect.surface}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Type de chauffage
            </label>
            <input
              type="text"
              name="id_typechauffage"
              id="id_typechauffage"
              value={prospect.id_typechauffage}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Revenu
            </label>
            <input
              type="text"
              name="id_typerevenu"
              id="id_typerevenu"
              value={prospect.id_typerevenu}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <br />

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 className="text-2xl font-bold">Mail</h3>
            <hr />
            <br />
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  De: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="id_typerevenu"
                  id="id_typerevenu"
                  value={prospect.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  <span className="text-red-500">.</span>
                </label>
                <input
                  type="text"
                  name="id_typerevenu"
                  id="id_typerevenu"
                  value={prospect.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Objet: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="id_typerevenu"
                id="id_typerevenu"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                A: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="id_typerevenu"
                id="id_typerevenu"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Cc: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="id_typerevenu"
                id="id_typerevenu"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="form-group col-md-12 editor">
              <label className="font-weight-bold">
                Description <span className="required"> * </span>
              </label>
              <ReactQuill
                theme="snow"
                value={userInfo.contenue}
                onChange={handleDescriptionChange}
                placeholder={"Ecrire un message..."}
                modules={modules}
                formats={formats}
              />
            </div>
            <div className="pt-3 flex items-center gap-2 float-end">
            <button
                className="bg-red-500 p-2 pt-1 rounded-[5px] text-white flex items-center gap-1"
                onClick={toggleModal}
              >
                Fermer
              </button>
              <button className="bg-[#1d59cc] p-2 pt-1 rounded-[5px] text-white flex items-center gap-1">
                <FaEnvelope />
                Envoyer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProspect;

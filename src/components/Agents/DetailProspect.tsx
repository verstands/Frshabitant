import { FaEdit, FaEnvelope, FaSms, FaVoicemail } from "react-icons/fa";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import { useEffect, useState } from "react";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { toast } from "react-toastify";
import ProspectService from "../../Services/Prospect.service";
import ReactQuill from "react-quill";
import TypechauffageService from "../../Services/TypeChauffage.service";
import { TypeChauffageInterface } from "../../Interfaces/TypeChauffageInterface";
import { MailInterface } from "../../Interfaces/MailInterface";
import MailService from "../../Services/Mail.service";
import Spinner from "../Spinner";
import ModelMailService from "../../Services/ModelMail.service";
import { UserInterface } from "../../Interfaces/UserInterface";
import { ModelMailInterface } from "../../Interfaces/ModelMailInterface";
import Select, { SingleValue } from "react-select";
import { HistoriqueAfficheInterface } from "../../Interfaces/HistoriqueAfficheInterface";
import HistoriqueAfficheService from "../../Services/HistoriqueAffiche.service";

interface DetailProspectProps {
  data: ProspectInterface;
}

interface SelectOption {
  value: string;
  label: string;
  id: string;
}

const DetailProspect: React.FC<DetailProspectProps> = ({ data }) => {
  const [prospect, setProspect] = useState<ProspectInterface>(data);
  const [modelMailData, setmodelMailData] = useState<ModelMailInterface>(data);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [typechauffage, settypechauffage] = useState<
    TypeChauffageInterface[] | null
  >(null);
  const [modelmail, setmodelmail] = useState<ModelMailInterface[] | null>(null);
  const [datamail, setdatamail] = useState<MailInterface>({
    cc: "vide",
    objet: "",
    exp: prospect.email,
    message: "",
    from: "",
  });
  const [loading, setLoading] = useState(false);

  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "[]"
  );

  const [histtorique, setHistorique] = useState<HistoriqueAfficheInterface>({
    action: "a modifier l'iedentite sur la fiche le",
    userProspect: String(data?.id),
    userAgent: String(user.id),
  });


  const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setdatamail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
  const serviceModelMail = new ModelMailService(config);
  const historiqueAffiche = new HistoriqueAfficheService(config);


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
      const responsehistorique = await historiqueAffiche.postHistoriqueAffiche(histtorique);
      setLoadingBtn(false);
      window.location.reload();
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
    setdatamail((prevState) => ({
      ...prevState,
      message: value,
    }));
  };
  const serviceTypeChauffage = new TypechauffageService(config);
  const serviceMail = new MailService(config);

  const getTypeChauffage = async () => {
    try {
      const response = await serviceTypeChauffage.getTypeChauffages();
      settypechauffage(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    //console.log(JSON.stringify(datamail));
    const response = await serviceMail.postMail(datamail);
    setLoading(false);
    setIsOpen(false);
    toast.success(response.data.message);
    try {
      setLoading(false);
      setIsOpen(false);
    } catch (error: unknown) {
      console.error("Unexpected error:", error);
      setLoading(false);
    }
  };

  serviceModelMail;
  const getModelMailMail = async () => {
    try {
      const response = await serviceModelMail.getModelmailMail(
        String(prospect.id_campagne),
        String(user.id_fonction)
      );
      setmodelmail(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleModelChange = async (
    selectedOption: SingleValue<SelectOption>
  ) => {
    if (selectedOption) {
      try {
        const response = await serviceModelMail.getModelmailId(
          selectedOption.id
        );

        const updatedContent = response.data.contenue.replace("XXX", data.nom);
        const updatedContents = updatedContent.replace("XXXX", user.prenom+" "+ user.nom);
        setmodelMailData(response.data);
        setdatamail((prevState) => ({
          ...prevState,
          objet: response.data.sujet,
          message: updatedContents,
          from: response.data.emailexp,
        }));
      } catch (error: unknown) {
        console.log(error);
      }
    }
  };

  const modelOptions = modelmail?.map((model) => ({
    value: model.id,
    label: model.nom,
    id: model.id,
  }));

  useEffect(() => {
    if (modelMailData) {
      console.log(modelMailData); 
    }
    getTypeChauffage();
    getModelMailMail();
  }, [modelMailData])
  return (
    <>
      <div className="border-white  bg-white p-4 rounded-[10px] shadow">
        <div className="flex items-center justify-between">
          <div>
            {
              prospect.status === "0" &&(
                <>
                  <h2 className="font-bold">Prospect n°{data.code}</h2>
                  <p className="text-gray-500">Detail de votre prospect</p>
                </>
              )
            }
            
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
              typechauffage
            </label>
            <select
              name="id_typechauffage"
              id="id_typechauffage"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">{prospect.id_typechauffage}</option>
              {typechauffage?.map((e) => (
                <option value={e.intitule}>{e.intitule}</option>
              ))}
            </select>
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
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-xl w-full">
            <h3 className="text-2xl font-bold b-2">Mail</h3>
            <hr />
            <div className="grid grid-cols-1 gap-2">
              <div>
                <label
                  htmlFor="modelSelect"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Modele: <span className="text-red-500">*</span>
                </label>
                <Select
                  id="modelSelect"
                  options={modelOptions}
                  onChange={handleModelChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label
                  htmlFor="id_typerevenu_from"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  De: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="from"
                  id="id_typerevenu_from"
                  value={datamail.from}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="id_typerevenu_objet"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Objet: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="objet"
                  id="id_typerevenu_objet"
                  value={datamail.objet}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="id_typerevenu_to"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  A: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="to"
                  id="id_typerevenu_to"
                  value={prospect.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="id_typerevenu_cc"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Cc: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cc"
                  id="id_typerevenu_cc"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="form-group col-md-12 h-96 overflow-y-scroll">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Description: <span className="text-red-500">*</span>
              </label>
              <ReactQuill
                theme="snow"
                value={datamail.message}
                // onChange={handleDescriptionChange}
                placeholder={"Ecrire un message..."}
                modules={modules}
                formats={formats}
              />
            </div>
            <div className="flex items-center py-4 gap-2 float-end">
              <button
                className="bg-red-500 p-2 pt-1 rounded-[5px] text-white flex items-center gap-1"
                onClick={toggleModal}
              >
                Fermer
              </button>
              {loading ? (
                <Spinner />
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-[#1d59cc] p-2 pt-1 rounded-[5px] text-white flex items-center gap-1"
                >
                  <FaEnvelope />
                  Envoyer
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProspect;

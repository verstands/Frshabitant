import React, { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import hasAccess from "../../components/hasAcess";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles for ReactQuill
import { ScriptInterface } from "../../Interfaces/ScriptInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import ScriptService from "../../Services/Script.service";
import { useNavigate, useParams } from "react-router-dom";
import TypeProduitService from "../../Services/TypeProduit.service";
import { TypeProduitInterface } from "../../Interfaces/TypeProduitInterface";

const config: RepositoryConfigInterface = {
  appConfig: {},
  dialog: {},
};

const serviceScript = new ScriptService(config);
const serviceTypeProduitt = new TypeProduitService(config);

const Script = () => {
  const [userInfo, setUserInfo] = useState<ScriptInterface>({
    titre: "",
    contenue: "",
    position: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [typroduit, settyproduit] = useState<TypeProduitInterface[] | null>(
    null
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getTypeProduit = async () => {
    try {
      const response = await serviceTypeProduitt.getTypeProduit();
      settyproduit(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleDescriptionChange = (value: string) => {
    setUserInfo((prevState) => ({
      ...prevState,
      contenue: value,
    }));
  };

  const getScriptId = async () => {
    if (id) {
      try {
        const response = await serviceScript.getScriptById(id);
        setUserInfo(response.data);
        console.log(response.data);
      } catch (error: unknown) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getScriptId();
    getTypeProduit();
    setLoading(false);
  }, [id]);

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

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await serviceScript.postScript(userInfo);
      setLoading(false);
      navigate("/script");
    } catch (error: unknown) {
      console.log("Error creating prospect:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Otbar title="Espace script" />
      {hasAccess("create") && (
        <div className="px-4">
          <div className="border-white m-3 bg-white p-10 rounded-[10px] shadow">
            <h2 className="font-bold text-[20px]">
              {id ? "Modifier le script" : "Créer un script"}
            </h2>
            <hr />
            <br />
            <form action="" onSubmit={handleSave}>
              <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right">
                Enregistrer
              </button>
              <br />
              <div className="grid md:grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="titre"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Titre
                  </label>
                  <input
                    type="text"
                    name="titre"
                    id="titre"
                    value={userInfo.titre}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="information"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Type produit
                  </label>
                  <select
                    name="position"
                    value={userInfo.position}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">selectioner un type de produit</option>
                    {typroduit?.map((ville) => (
                      <option value={ville.id}>{ville.titre}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-12 editor">
                <label className="font-weight-bold">
                  Description <span className="required"> * </span>
                </label>
                <ReactQuill
                  theme="snow"
                  value={userInfo.contenue}
                  onChange={handleDescriptionChange}
                  placeholder={"Ecrire un script..."}
                  modules={modules}
                  formats={formats}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Script;

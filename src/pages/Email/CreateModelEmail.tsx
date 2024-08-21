import React, { useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import InformationGeneraleEmail from "../../components/Agents/InformationGeneraleEmail";
import ParametreModelEmail from "../../components/Agents/ParametreModelEmail";
import ContenuEmail from "../../components/Agents/ContenuEmail";
import DocumentModelEmail from "../../components/Agents/DocumentModelEmail";
import { Link, useNavigate } from "react-router-dom";
import RoleModelEmail from "../../components/Agents/RoleModelEmail";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import ModelMailService from "../../Services/ModelMail.service";
import { UserInterface } from "../../Interfaces/UserInterface";

const CreateModelEmail = () => {
  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "[]"
  );

  const [form1Data, setForm1Data] = useState({
    nom: "",
    description: "",
    active: true,
  });

  const [formData2, setFormData2] = useState({
    nomexp: "",
    emailexp: "",
    disnataireexp: "",
    ccexp: "",
    bccexp: "",
  });

  const [form3Data, setForm3Data] = useState<{ fichier: File | null }>({
    fichier: null,
  });

  const [form4Data, setForm4Data] = useState({
    sujet: "",
    contenue: "",
  });

  const [form5Data, setForm5Data] = useState({
    selectedCampagne: null,
    selectedFonction: null,
  });

  const navigate = useNavigate();

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const handleForm1Change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm1Data({ ...form1Data, [name]: value });
  };

  const handleForm2Change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData2({ ...formData2, [name]: value });
  };

  const handleForm3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setForm3Data({ ...form3Data, [name]: files[0] });
    }
  };

  const handleForm4Change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm4Data({ ...form4Data, [name]: value });
  };

  const handleDescriptionChange = (value: string) => {
    setForm4Data((prevState) => ({
      ...prevState,
      contenue: value,
    }));
  };

  const handleCheckboxChange = () => {
    setForm1Data({ ...form1Data, active: !form1Data.active });
  };

  const handleForm5Change = (name: string, value: string) => {
    setForm5Data((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const serviceModelMail = new ModelMailService(config);

  const handleSave = async () => {
    const combinedData = {
      ...form1Data,
      ...formData2,
      fichier: form3Data.fichier ? form3Data.fichier.name : "null",
      ...form4Data,
      id_campagne: form5Data.selectedCampagne?.value || null,
      id_fonction: form5Data.selectedFonction?.value || null,
      id_user: user.id,
    };
    console.log(JSON.stringify(combinedData));
    try {
      const response = await serviceModelMail.postModelmail(combinedData);
      navigate("/modelemail");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <Otbar title="Espace mail" />
      <div className="grid md:grid-cols-2  p-2 gap-5">
        <div>
          <InformationGeneraleEmail
            formData={form1Data}
            handleChange={handleForm1Change}
            handleCheckboxChange={handleCheckboxChange}
          />
          <br />
          <ParametreModelEmail
            formData={formData2}
            handleForm2Change={handleForm2Change}
          />
          <br />
          <DocumentModelEmail
            formData={form3Data}
            handleForm3Change={handleForm3Change}
          />
        </div>
        <div>
          <ContenuEmail
            formData={form4Data}
            handleForm4Change={handleForm4Change}
            handleDescriptionChange={handleDescriptionChange}
          />
          <br />
          <RoleModelEmail
            formData={form5Data}
            handleForm5Change={handleForm5Change}
          />
        </div>
      </div>
      <div className="p-3 flex items-center gap-2 ">
        <Link
          to="/modelemail"
          className="border-[#1e58c1] text-black flex items-center gap-3 bg-gray-200 p-3 rounded float-right"
        >
          Retour à la liste
        </Link>
        <button
          className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded float-right"
          onClick={handleSave}
        >
          Enregistrer
        </button>
      </div>
    </>
  );
};

export default CreateModelEmail;

import React, { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import { FaPhone } from "react-icons/fa";
import DossierUserTab from "../../components/Agents/DossierUserTab";
import DossierUserActionRapide from "../../components/Agents/DossierUserActionRapide";
import CommentUserDossier from "../../components/Agents/CommentUserDossier";
import HistoriqueDossierUser from "../../components/Agents/HistoriqueDossierUser";
import AgendaDossierUser from "../../components/Agents/AgendaDossierUser";
import { useParams } from "react-router-dom";
import { ProspectInterface } from "../../Interfaces/ProspectInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import ProspectService from "../../Services/Prospect.service";
import Swal from "sweetalert2";
import Commentaire from "../../components/Agents/Commentaire";

const DetailDossier = () => {
  const { id } = useParams<{ id: string }>();
  const [prospect, setProspect] = useState<ProspectInterface[] | null>(null);
  const [loading, setLoading] = useState(true);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const serviceProspect = new ProspectService(config);

  const getProspectId = async () => {
    try {
      const response = await serviceProspect.getProspectId(id!);
      setProspect(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProspectId();
  }, []);

  const appel = () => {
    Swal.fire({
      icon: "question",
      title: "Êtes-vous prêt ?",
      text: "Les appels automatiques vont commencer",
      confirmButtonText: "C'est parti",
    })
  };

  return (
    <>
      <Otbar title="Espace Dossier" />
      <div className="p-4">
        <div className="border-white bg-white p-4 m-3 rounded-[10px] shadow flex items-center justify-between">
          <div className=" cursor-pointer text-green-500 border-2 border-green-500 flex items-center gap-2 p-4 rounded-[10px]">
            <p>Placer un rendez-vous sur place</p>
          </div>
          <div className="">
            <p>
              <strong>Date de création : </strong> 11/12/2023 12:22:45
            </p>
            <p>
              <strong>Status : </strong> A rappeler
            </p>
            <p>
              <strong>Installateur : </strong>
              Non enregistré
            </p>
            <p>
              <strong>Technicien : </strong> dd
            </p>
          </div>
        </div>
        <div className="float-end cursor-pointer font-bold text-blue-600 border-2 bg-blue-200 border-blue-200 flex items-center gap-2 p-4 rounded-[10px]"   onClick={() => appel()}>
          <p>Démarrer un appel avec ce clien</p>
          <FaPhone color="blue" />
        </div>
        <br />
        <br />
        <br />
        <div className="grid grid-cols-2 p-2 gap-5">
          <div>
            {prospect && <DossierUserTab data={prospect} />}
            <br />
            { <DossierUserActionRapide datadata={prospect} /> }
            <br />
            <HistoriqueDossierUser  datadata={prospect} />
          </div>
          <div>
            {prospect && <CommentUserDossier datadata={prospect} />}
            <br />
            <AgendaDossierUser />
          </div>
        </div>
        <div className="">
          {prospect && <Commentaire datadata={prospect} />}
        </div>
      </div>
    </>
  );
};

export default DetailDossier;

import React, { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import { UserInterface } from "../../Interfaces/UserInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import AgentService from "../../Services/Agent.service";
import Spinner from "../../components/Spinner";
import ProspectService from "../../Services/Prospect.service";
import { useNavigate } from "react-router-dom";
import CampagneService from "../../Services/Campagne.service";
import { CampagneInterfce } from "../../Interfaces/CampagneInterface";

const RepartiLead = () => {
  const [dataMapping, setDataMapping] = useState([]);
  const [agent, setAgent] = useState<UserInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [addloading, setAddLoading] = useState(false);
  const [prospectDistribution, setProspectDistribution] = useState<{ [key: number]: any[] }>({});
  const [remainingProspects, setRemainingProspects] = useState<any[]>([]);
  const [distributedProspects, setDistributedProspects] = useState<{ [key: string]: any[] }>({});
  const [isDisabled, setIsDisabled] = useState(false);

  //partie campgne
  const titreCampagne = sessionStorage.getItem("titre") || "";
  const typelead = sessionStorage.getItem("lead") || "";
const produitCampagne = sessionStorage.getItem("produit") || "";
const totalCampagne = sessionStorage.getItem("selectedProspects");

const parsedTotalCampagne = totalCampagne ? JSON.parse(totalCampagne) : [];

const [campagne, setCampagne] = useState<CampagneInterfce>({
    titre: titreCampagne,
    id_produit: produitCampagne, 
    statut: "1",
    nouveau: "0",
    nrp: "0",
    rdv: "0",
    nonvalide: "0",
    nrptermine: "0",
    total: parsedTotalCampagne.length.toString(), 
    distribue: parsedTotalCampagne.length.toString(), 
    restant: parsedTotalCampagne.length.toString(), 
});
  const navigate = useNavigate();


  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getUtilisateur = async () => {
    try {
      const response = await AgntService.getAgent();
      setAgent(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const AgntService = new AgentService(config);
  const serviceProspect = new ProspectService(config);
  const serviceCampagne = new CampagneService(config);


  useEffect(() => {
    const dataFromSessionStorage =
      JSON.parse(sessionStorage.getItem("selectedProspects")) || [];
    setDataMapping(dataFromSessionStorage);
    setRemainingProspects(dataFromSessionStorage);
    getUtilisateur();
    setLoading(false);

  }, []);

  const distributeFixedValue = (value: number) => {
    if (!agent) return;

    console.log("Distributing fixed value:", value);

    const newDistributedProspects = { ...distributedProspects };
    const newRemainingProspects = [...remainingProspects];
    
    agent.forEach((a) => {
      const prospectsForAgent = newRemainingProspects.splice(0, value);
      newDistributedProspects[a.id] = (newDistributedProspects[a.id] || []).concat(prospectsForAgent);
    });

    console.log("New remaining prospects:", newRemainingProspects);
    console.log("New distributed prospects:", newDistributedProspects);

    setRemainingProspects(newRemainingProspects);
    setDistributedProspects(newDistributedProspects);
  };

  const handleRepartitionTotale = () => {
    if (agent && agent.length > 0) {
      const totalProspects = dataMapping.length;
      const prospectsPerAgent = Math.floor(totalProspects / agent.length);
      const distribution: { [key: number]: any[] } = {};

      let prospectIndex = 0;

      for (let i = 0; i < agent.length; i++) {
        distribution[agent[i].id] = dataMapping.slice(prospectIndex, prospectIndex + prospectsPerAgent);
        prospectIndex += prospectsPerAgent;
      }

      // If there are remaining prospects, distribute them one by one
      for (let i = 0; prospectIndex < totalProspects; i++, prospectIndex++) {
        distribution[agent[i % agent.length].id].push(dataMapping[prospectIndex]);
      }

      setProspectDistribution(distribution);
      sessionStorage.setItem("prospectDistribution", JSON.stringify(distribution));
      setDataMapping([]);
      setIsDisabled(true);
    }
  };

  const handleDemarrerRepartition = async () => {
    setAddLoading(true);
    let idCampagne;
    const response = await serviceCampagne.postCampagne(campagne);
    // eslint-disable-next-line prefer-const
    idCampagne = response.id;

    try {
      for (const [agentId, prospects] of Object.entries(prospectDistribution)) {
        for (const prospect of prospects) {
            const prospectToSave = {
                nom:  String(prospect[8] || ''),
                prenom:  String(prospect[8] || ''),
                telephone:  String(prospect[4] || ''),
                email:  String(prospect[6] || ''),
                adresse: '0', 
                ville: '0', 
                codepostal: '0',
                status: '0',
                statusdossier: '0',
                surface: "0",
                id_typechauffage:  String(prospect[5] || ''),
                id_typerevenu:  String(prospect[2] || ''),
                id_user:  String(agentId),
                code:  String(prospect[0] || ''),
                id_campagne:  String(idCampagne),
                id_produit:  String(produitCampagne),
                typelead:  String(typelead),
              };
            console.log(prospectToSave)
          try {
            setAddLoading(false);
           await serviceProspect.postProspect(prospectToSave);
          } catch (error) {
            console.log("Error creating prospect:", error);
          }
        }
      }
    } catch (error: unknown) {
      console.log("Error creating prospect:", error);
      setAddLoading(false);
    }
    //sessionStorage.removeItem("prospectDistribution");
    //sessionStorage.removeItem("selectedProspects");
    //sessionStorage.removeItem("titre");
    //sessionStorage.removeItem("produit");
    //sessionStorage.removeItem("dataexcel");
    navigate("/viewCapagne");
    console.log("Prospect distribution saved to sessionStorage:", prospectDistribution);
  };
  return (
    <>
      <Otbar title="Espace campagne" />
      <div className="mx-auto flex items-center justify-center">
        <div className=" border border-gray-800 bg-gray-800 p-4 text-center rounded-lg w-80">
          <span className="text-[3rem] text-white">{dataMapping.length}</span>
          <br />
          <i className="text-[20px] text-white ">Prospect Disponibles</i>
        </div>
      </div>
      <div className="p-4">
        <div className="border border-gray-500 rounded-lg">
          <div className="border border-gray-500 rounded-t-lg">
            <div className="px-10 py-3 flex items-center justify-between">
              <h5 className="text-grey-500 size-9 font-bold w-full">
                {" "}
                Repartir les leads disponible
              </h5>
              <p></p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 p-4">
            <div>
              <center>
                <h6 className="text-blue-400">
                  Repartition de l'ensemble des lead a part égales
                </h6>
                <button className="border p-3 rounded-[12px] border-blue-600 bg-blue-600 text-center text-white"
                 onClick={handleRepartitionTotale}
                 disabled={isDisabled}
                >
                  Répartition Totale
                </button>
              </center>
            </div>
            <div>
              <center>
                <h6 className="text-blue-400">
                  Repartition d'un nombre fixe à chaque utilisateur
                </h6>
                <div className="flex items-center justify-center">
                  <div className="border border-gray-500 p-3 rounded-l-xl">
                    Répartition par valeur
                  </div>
                  <div className="border border-gray-500 bg-gray-500 p-3 rounded-r-xl">
                    <div className="gap-5 flex items-center justify-center">
                      <button onClick={() => distributeFixedValue(10)} className="text-white font-bold">10</button>
                      <button onClick={() => distributeFixedValue(25)} className="text-white font-bold">25</button>
                      <button onClick={() => distributeFixedValue(50)} className="text-white font-bold">50</button>
                      <button onClick={() => distributeFixedValue(100)} className="text-white font-bold">100</button>
                    </div>
                  </div>
                </div>
              </center>
            </div>
            <div>
              <center>
                <h6 className="text-blue-400">
                  Repartition d'un nombre defini à chaque utilisateur
                </h6>
                <div className=" flex items-center justify-center">
                  <div className="flex items-center justify-center gap-8 border border-white p-3 rounded-xl shadow-md">
                    <button className="font-bold">-</button>
                    <div className="font-bold">20</div>
                    <button className="font-bold">+</button>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="border border-gray-500 bg-gray-100 rounded-lg">
          <div className="border border-blue-100 bg-blue-100 rounded-t-lg">
            <div className="px-10 py-3 flex items-center justify-between">
              <h5 className="text-blue-700  font-bold w-full">
                {" "}
                Detail de répartition par utilisateur
              </h5>
              <p></p>
            </div>
          </div>
        <center className="py-3">{loading && <Spinner />}</center>
          <div className="grid md:grid-cols-3 gap-3 p-4">
            {agent?.map((r, index) => (
              <div
                key={index}
                className="border border-white shadow-lg p-3 bg-white rounded-xl"
              >
                <h3 className="py-2 font-bold">{r.prenom} {r.nom}</h3>
                <hr />
                <center className="py-4">
                  <h5>{r.email}</h5>
                  <div className="border border-green-300 bg-green-300 inline-block p-1 font-bold text-green-700 rounded-xl">
                    {
                        r.statut === "0" ? "Admin" : ""
                    }
                  </div>
                  <div className="py-1"></div>
                  <hr />
                </center>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center gap-8 border border-white p-3 rounded-xl shadow-md">
                    <button className="font-bold">-</button>
                    <div className="font-bold">{prospectDistribution[r.id]?.length || 0}</div>
                    <button className="font-bold">+</button>
                  </div>
                </div>
                <div className="py-4"></div>
                <hr />
                <div className="flex items-center justify-between px-10 py-4">
                  <center>
                    <h5>Total</h5>
                   <span>{prospectDistribution[r.id]?.length || 0}</span>
                  </center>
                  <center>
                    <h5>A appeler</h5>
                   <span>{prospectDistribution[r.id]?.length || 0}</span>
                  </center>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <center>
        {
            addloading &&  <Spinner />
        }
        <button className="border p-3 rounded-[12px] border-green-600 bg-green-600 text-center text-white"
        onClick={handleDemarrerRepartition}
        >
          Démarrer la repartition
        </button>
      </center>
    </>
  );
};

export default RepartiLead;

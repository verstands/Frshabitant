import React, { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import { UserInterface } from "../../Interfaces/UserInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import AgentService from "../../Services/Agent.service";

const RepartiLead = () => {
  const [dataMapping, setDataMapping] = useState([]);
  const [agent, setAgent] = useState<UserInterface[] | null>(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const dataFromSessionStorage =
      JSON.parse(sessionStorage.getItem("selectedProspects")) || [];
    setDataMapping(dataFromSessionStorage);
    getUtilisateur();
    setLoading(false);
  }, []);
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
                <button className="border p-3 rounded-[12px] border-blue-600 bg-blue-600 text-center text-white">
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
                      <button className="text-white font-bold">10</button>
                      <button className="text-white font-bold">25</button>
                      <button className="text-white font-bold">50</button>
                      <button className="text-white font-bold">100</button>
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
          <div className="grid md:grid-cols-3 p-4">
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
                    <div className="font-bold">20</div>
                    <button className="font-bold">+</button>
                  </div>
                </div>
                <div className="py-4"></div>
                <hr />
                <div className="flex items-center justify-between px-10 py-4">
                  <center>
                    <h5>Total</h5>
                    <span>0</span>
                  </center>
                  <center>
                    <h5>A appeler</h5>
                    <span>0</span>
                  </center>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <center>
        <button className="border p-3 rounded-[12px] border-green-600 bg-green-600 text-center text-white">
          Démarrer la repartition
        </button>
      </center>
    </>
  );
};

export default RepartiLead;

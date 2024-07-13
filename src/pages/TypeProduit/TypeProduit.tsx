import { FaUser } from "react-icons/fa";
import Otbar from "../../components/Agents/Otbar";
import { Link } from "react-router-dom";

const TypeProduit = () => {
  return (
    <div>
      <Otbar title="Espace Produit" />
      <div className="px-20">
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <h2 className="font-bold text-[20px] pb-4">Type de produit</h2>
          <hr className="pb-3" />
          <div className="grid gap-3 grid-cols-3 grid-template-rows: 1fr">
            <Link to="" className="hover:shadow-sm">
              <div className="border-2 border-blue-600 p-2 rounded-[10px]">
                <center>
                  <FaUser size={30} color="#55565a" />
                  <h1 className="text-blue-600 text-[20px] w-full font-bold">
                    Rénovation Globale
                  </h1>
                </center>
                <br />
                <hr className="border-1 border-blue-600" />

                <p className="p-6 font-mono">
                  Poursuivez votre parcours avec une interface personnalisée
                  pour la rénovation global.
                  <br />.
                </p>
              </div>
            </Link>
            <Link to="" className="hover:shadow-sm">
              <div className="border-2 border-blue-600 p-2 rounded-[10px]">
                <center>
                  <FaUser size={30} color="#55565a" />
                  <h1 className="text-blue-600 text-[20px] w-full font-bold">
                    Panneaux photovoltaique
                  </h1>
                </center>
                <br />
                <hr className="border-1 border-blue-600" />

                <p className="p-6 font-mono">
                  Poursuivez votre parcours avec une interface personnalisée
                  pour les panneaux pour les photovoltaique..
                </p>
              </div>
            </Link>
            <Link to="" className="hover:shadow-sm">
              <div className="border-2 border-blue-600 p-2 rounded-[10px]">
                <center>
                  <FaUser size={30} color="#55565a" />
                  <h1 className="text-blue-600 text-[20px] w-full font-bold">
                    PAC
                  </h1>
                </center>
                <br />
                <hr className="border-1 border-blue-600" />

                <p className="p-6 font-mono">
                  Poursuivez votre parcours avec une interface personnalisée
                  pour les pompes à chaleur
                  <br />
                  .
                </p>
              </div>
            </Link>
            <Link to="" className="hover:shadow-sm">
              <div className="border-2 border-blue-600 p-2 rounded-[10px]">
                <center>
                  <FaUser size={30} color="#55565a" />
                  <h1 className="text-blue-600 text-[20px] w-full font-bold">
                    Thermostat
                  </h1>
                </center>
                <br />
                <hr className="border-1 border-blue-600" />

                <p className="p-6 font-mono">
                  Poursuivez votre parcours avec une interface personnalisée
                  pour les thermostat
                  <br />
                  .
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeProduit;

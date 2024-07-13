import Otbar from "../../components/Agents/Otbar";
import { FaDropbox } from "react-icons/fa";

const ResulatCampagne = () => {
  return (
    <>
      <Otbar title="Espace campagne" />
      <div className="p-4">
        <div className="border border-gray-500 rounded-lg">
          <div className="border bg-green-600 border-green-600 rounded-t-lg">
            <div className="px-10 py-3 flex items-center justify-between">
              <h5 className="text-white size-9 font-bold w-full">
                {" "}
                Résultat du scan de votre fichier
              </h5>
              <p>
                <FaDropbox />
              </p>
            </div>
          </div>
          <br />
          <div className="mx-auto flex items-center justify-center">
            <div className=" border border-gray-800 bg-gray-800 p-4 text-center rounded-lg w-80">
              <span className="text-[3rem] text-white">197</span>
              <br />
              <i className="text-[20px] text-white ">Prospect trouvés</i>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-4 gap-4 m-4">
            <div className=" border border-green-800 bg-green-700 p-4  rounded-lg w-50">
              <div className="flex items-center gap-4">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <span className="font-bold text-white">197 mobiles</span>
                  <p className="text-[15px] text-white ">
                    Selectionnz les numeros mobiles
                  </p>
                </div>
              </div>
            </div>
            <div className=" border border-green-800 bg-green-700 p-4  rounded-lg w-50">
              <div className="flex items-center gap-4">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <span className="font-bold text-white">25 Fixe</span>
                  <p className="text-[15px] text-white ">
                    Selectionnz les numeros fixe
                  </p>
                </div>
              </div>
            </div>
            <div className=" border border-green-800 bg-green-700 p-4  rounded-lg w-50">
              <div className="flex items-center gap-4">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <span className="font-bold text-white">5 type inconnu</span>
                  <p className="text-[15px] text-white ">
                    Selectionnz les numeros de type inconnus
                  </p>
                </div>
              </div>
            </div>
            <div className=" border border-green-800 bg-green-700 p-4  rounded-lg w-50">
              <div className="flex items-center gap-4">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <span className="font-bold text-white">2 doublons global</span>
                  <p className="text-[15px] text-white ">
                    Selectionnz les numeros en doublons dans toutes les campagnes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <center>
               <button className="border p-3 rounded-[12px] border-blue-600 bg-blue-600 text-center text-white">Lancer l'importation</button>
            </center>
            <br />
        </div>
      </div>
    </>
  );
};

export default ResulatCampagne;

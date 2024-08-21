import Otbar from "../../components/Agents/Otbar";
import MappingTable from "./MappingTable";

const MappingCampagne = () => {
  return (
    <>
      <Otbar title="Espace Campagne" />
      <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
        <h2 className="font-bold text-[20px]">
          Mapping des champs de votre fichier
        </h2>
        <br />
        <hr/>
        <br />
        <MappingTable />
      </div>
    </>
  );
};

export default MappingCampagne;

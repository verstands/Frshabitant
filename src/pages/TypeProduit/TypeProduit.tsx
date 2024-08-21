import { FaUser } from "react-icons/fa";
import Otbar from "../../components/Agents/Otbar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TypeProduitInterface } from "../../Interfaces/TypeProduitInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import TypeProduitService from "../../Services/TypeProduit.service";
import Spinner from "../../components/Spinner";

const TypeProduit = ({ produits }: { produits: TypeProduitInterface[] }) => {
  const [produitData, setproduit] = useState<TypeProduitInterface[] | null>(null);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getTypeproduit = async () => {
    try {
      const response = await TypeproduitService.getTypeProduit();
      setproduit(response.data);
      setloading(false)
    } catch (error: unknown) {
      console.log(error);
    }
  };
  const TypeproduitService = new TypeProduitService(config);

  useEffect(() => {
    getTypeproduit();
    
  }, [produits]);

  const BtnOnclick = (id: string) =>{
    sessionStorage.setItem('produit', id);
    navigate('/createCapagne')
  }
  return (
    <div>
      <Otbar title="Espace Produit" />
      {
        loading && <center><Spinner /></center>
      }
      <div className="px-20">
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <h2 className="font-bold text-[20px] pb-4">Type de produit</h2>
          <hr className="pb-3" />
          <div className="grid gap-3 grid-cols-3 grid-template-rows: 1fr">
            {produitData?.map((produitItem: TypeProduitInterface) => (
              <button  onClick={() => BtnOnclick(produitItem.id)} className="hover:shadow-sm w-full" style={{ maxWidth: "300px" }}>
                <div className="border-2 border-blue-600 p-2 rounded-[10px]">
                  <center>
                    <FaUser size={30} color="#55565a" />
                    <h1 className="text-blue-600 text-[20px] w-full font-bold">
                      {produitItem.titre}
                    </h1>
                  </center>
                  <br />
                  <hr className="border-1 border-blue-600" />

                  <p className="p-6 font-mono">
                    {produitItem.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeProduit;

import React, { useEffect, useState } from 'react';
import ScriptService from '../../Services/Script.service';
import { RepositoryConfigInterface } from '../../Interfaces/RepositoryConfig.interface';
import { ScriptInterface } from '../../Interfaces/ScriptInterface';
import { ProspectInterface } from '../../Interfaces/ProspectInterface';
import Spinner from '../Spinner';


interface DetailProspectProps {
    datadata: ProspectInterface;
  }

const Discours: React.FC<DetailProspectProps> = ({ datadata }) => {
    const [activeTab, setActiveTab] = useState<string>('tab1');
    const [data, setdata] = useState<ScriptInterface[] | null>(null);
    
    
    const config: RepositoryConfigInterface = {
        appConfig: {},
        dialog: {},
    };

    const getTypeProduit = async () => {
        try {
          const response = await serviceScript.getScriptByIdProduit(datadata.id_produit); 
          setdata(response);
        } catch (error: unknown) {
          console.log(error);
        }
      };
  
  const serviceScript = new ScriptService(config);
  
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };
    
    useEffect(() => {
        getTypeProduit(); 
      }, []); 

      const renderContent = () => {
        if (!data) {
            return <Spinner />;
        }
        const activeData = data.find(d => d.titre.toLowerCase() === activeTab.toLowerCase());
        if (!activeData) {
            return <div>Aucun contenu disponible</div>;
        }
        return <div dangerouslySetInnerHTML={{ __html: activeData.contenue }} />;
    };

    return (
        <div className="border-white bg-white p-4 rounded-[10px] shadow">
            <h2 className="font-bold">Discours</h2>
            <p className="text-gray-500">Utiliser ce discours pour renforcer votre argumentation lors de votre appel</p>
            <div className="w-full">
                <div className="border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="-mb-px flex gap-3" aria-label="Tabs">
                            {data?.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTabClick(item.titre)}
                                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${activeTab === item.titre ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    {item.titre}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 h-96 overflow-y-scroll">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Discours;

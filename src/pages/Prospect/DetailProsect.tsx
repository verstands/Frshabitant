import React, { useEffect, useState } from 'react'
import Otbar from '../../components/Agents/Otbar'
import { FaEdit } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import ProspectService from '../../Services/Prospect.service';
import { RepositoryConfigInterface } from '../../Interfaces/RepositoryConfig.interface';
import { ProspectInterface } from '../../Interfaces/ProspectInterface';


const DetailProsect = () => {
    const [prospect, setProspect] = useState<ProspectInterface[] | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    
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
  return (
    <>
      <Otbar title="Espace prospects" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-4">
          <h1 className="text-[#b3b4b6]">Prospect / </h1>
          <h1 className="font-bold"> Detail de prospect : {prospect?.code}</h1>
        </div>
      </div>
      <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <div className="grid md:grid-cols-3 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Status*
              </label>
              <input
                  type="text"
                  value={prospect?.status}
                  name="nom"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Noms*
              </label>
              <input
                  type="text"
                  name="nom"
                  id="email"
                  value={prospect?.nom}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Email*
              </label>
              <input
                  type="text"
                  name="nom"
                  value={prospect?.email}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Telephone*
              </label>
              <input
                  type="text"
                  value={prospect?.telephone}
                  name="nom"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Adresse*
              </label>
              <input
                  type="text"
                  name="nom"
                  value={prospect?.adresse}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Ville*
              </label>
              <input
                  type="text"
                  name="nom"
                  value={prospect?.ville}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Code postal
              </label>
              <input
                  type="text"
                  name="nom"
                  value={prospect?.codepostal}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Surface
              </label>
              <input
                  type="text"
                  name="nom"
                  value={prospect?.surface}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type de chauffage
              </label>
              <input
                  type="text"
                  name="nom"
                  value={prospect?.id_typechauffage}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Revenu
              </label>
              <input
                  type="text"
                  name="nom"
                  value={prospect?.id_typerevenu}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Piece joint
              </label>
              <input
                  type="file"
                  name="nom"
                 
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
          </div>
          <br />
          <div>
              <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[green] p-3 rounded-[15px]">
               Modifier <FaEdit />
              </button>
            </div>
          <br />
          <hr />
          
        </div>
    </>
  )
}

export default DetailProsect
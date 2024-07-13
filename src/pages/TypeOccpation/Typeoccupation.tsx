import React, { useState } from 'react';
import TypeCard from '../../components/Commercial/TypeCard';
import { FaChevronDown } from 'react-icons/fa';
import PositionMaison from '../../components/Commercial/PositionMainson';
import FormeMaison from '../../components/Commercial/FormeMaison';
import NiveauHabitable from '../../components/Commercial/NiveauHabitable';
import TypeToit from '../../components/Commercial/TypeToit';
import TypeCourvertureToiture from '../../components/Commercial/TypeCourvertureToiture';
import InclinaisonPan from '../../components/Commercial/InclinaisonPan';
import TypeCombe from '../../components/Commercial/TypeComble';
import CombleIsole from '../../components/Commercial/CombleIsole';
import TypeMursMaison from '../../components/Commercial/TYpeMursMaison';
import MursIsole from '../../components/Commercial/MursIsole';
import TypeVitrage from '../../components/Commercial/TYpeVitrage';
import TypeVentilation from '../../components/Commercial/TypeVentilation';
import Jardin from '../../components/Commercial/Jardin';
import TypeSousSol from '../../components/Commercial/TypeSousSol';
import Garage from '../../components/Commercial/Garage';
import TYpeInsatllationElectrique from '../../components/Commercial/TypeInstalltionElectrique';
import Sensibilite from '../../components/Commercial/Sensibilite';

const Typeoccupation: React.FC = () => {
    const [occupants, setOccupants] = useState<number>(1);
    // Fonction pour gérer l'augmentation du nombre d'occupants
    const increaseOccupants = (): void => {
        setOccupants(occupants + 1);
    };

    const decreaseOccupants = (): void => {
        if (occupants > 0) {
            setOccupants(occupants - 1);
        }
    };


    return (
        <>
            <div className='mx-auto flex justify-between items-center px-20 bg-[#e7e9ed] max-w-7xl'>
                <div className='w-9/12 p-4'>
                    <div className='border-white bg-white shadow-inherit'>
                        <h2 className='text-center pt-8 text-[#fba232] font-bold text-[150%]'>Type d'occupation</h2>
                        <p className='text-center mt-5 text-[150%]'>Statut d'occupation</p>
                        <TypeCard />
                        <p className='text-center m-5 text-[150%]'>Nombre d'occupants</p>
                        <div className="flex justify-center items-center gap-3">
                            <button onClick={decreaseOccupants} className='border-gray-500 text-white bg-gray-500 rounded p-3'>-</button>
                            <span>{occupants}</span>
                            <button onClick={increaseOccupants} className='border-gray-500 text-white bg-gray-500 rounded p-3'>+</button>
                        </div>
                        <h2 className='text-center pt-8 text-[#fba232] font-bold text-[150%]'>Architecture de la maison</h2>
                        <p className='text-center m-5 text-[150%]'>Année de construction</p>
                        <div className='flex items-center justify-center px-20'>
                            <select name="" className='bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' id="">
                                <option value=""> Choisir</option>
                            </select>
                        </div>
                        <p className='text-center mt-8 text-[150%]'>Coefficient d'isolation</p>
                        <div className='flex items-center justify-center px-20'>
                            <select name="" disabled className='bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' id="">
                                <option value=""> Choisir</option>
                            </select>
                        </div>
                        <p className='text-center mt-8 text-[150%]'>Surface au sol(m2)</p>
                        <div className='flex items-center justify-center px-20'>
                            <input name="" disabled className='bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' id="" />
                        </div>
                        <p className='text-center mt-8 text-[150%]'>Surface habitable (m2)</p>
                        <div className='flex items-center justify-center px-20'>
                            <input name="" disabled className='bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' id="" />
                        </div>
                        <p className='text-center m-5 text-[150%]'>Nombre de pièce</p>
                        <div className="flex justify-center items-center gap-3">
                            <button className='border-gray-500 text-white bg-gray-500 rounded p-3'>-</button>
                            <span>1</span>
                            <button className='border-gray-500 text-white bg-gray-500 rounded p-3'>+</button>
                        </div>
                        <p className='text-center mt-5 text-[150%]'>Positionnement de la maison</p>
                        <PositionMaison />
                        <p className='text-center mt-5 text-[150%]'>Forme de la maison</p>
                        <FormeMaison />
                        <p className='text-center mt-5 text-[150%]'>Nombre de niveau habitables (hors combles)</p>
                        <NiveauHabitable />
                        <p className='text-center m-5 text-[150%]'>Hauteur moyenne sous platfond (m)</p>
                        <div className='flex items-center justify-center px-20'>
                            <select name="" className='bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' id="">
                                <option value=""> Choisir</option>
                            </select>
                        </div>
                        <p className='text-center m-5 text-[150%]'>Type de toit</p>
                        <TypeToit />
                        <p className='text-center m-5 text-[150%]'>Type de couverture de la toiture</p>
                        <TypeCourvertureToiture />
                        <p className='text-center m-5 text-[150%]'>Inclinaison du pan</p>
                        <InclinaisonPan />
                        <p className='text-center m-5 text-[150%]'>Type de combles</p>
                        <TypeCombe />
                        <p className='text-center m-5 text-[150%]'>Combles isolés</p>
                        <CombleIsole />
                        <p className='text-center m-5 text-[150%]'>Type de murs de la maison (Exterieur)</p>
                        <TypeMursMaison />
                        <p className='text-center m-5 text-[150%]'>Murs isolés</p>
                        <MursIsole />
                        <p className='text-center m-5 text-[150%]'>Type de vitrage</p>
                        <TypeVitrage />
                        <p className='text-center m-5 text-[150%]'>Type de ventilation</p>
                        <TypeVentilation />
                        <p className='text-center m-5 text-[150%]'>Jardin</p>
                        <Jardin />
                        <p className='text-center mt-8 text-[150%]'>Surface du jardin</p>
                        <div className='flex items-center justify-center px-20'>
                            <input name="" className='bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' id="" />
                        </div>
                        <p className='text-center m-5 text-[150%]'>Type de sous-sol</p>
                        <TypeSousSol />
                        <p className='text-center m-5 text-[150%]'>Avez-vous un garage?</p>
                        <Garage />
                        <p className='text-center m-5 text-[150%]'>Type d'installation électrique</p>
                        <TYpeInsatllationElectrique />
                        <p className='text-center m-5 font-bold text-[150%] text-green-400'>Sensibilité à l'environnement</p>
                        <p className='text-center m-5 text-[150%]'>Etes-vous sensible à la préservation de notre planète?</p>
                        <Sensibilite />
                        <button type="submit" className="text-white m-5 bg-[#fe9f23] hover:bg-orange-700  focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 float-right">
                            <div className="flex items-center justify-center">
                                <span className="text-center">POTENTIEL SOLAIRE</span>
                            </div>
                        </button>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className='w-3/12 p-4 fixed  right-0 top-0 bottom-0 bg-[#333e57] shadow  h-screen'>
                    <div className='mt-6'>
                        <p className='p-2 text-white mt-8 text-[150%]'>Votre étude</p>
                        <hr className='text-white' />
                        <div className='flex items-center'>
                            <p className='p-2 text-orange-500 font-bold text-[90%]'>TEST TEST</p>
                            <FaChevronDown className='text-orange-500' />
                        </div>
                        <div className='p-4 text-white'>
                            <p>Mobile : </p>
                            <p>Email : </p>
                            <p>Adresse : </p>
                            <p>13 rue Richer Paris</p>
                        </div>
                        <hr className='text-white' />
                        <div className='flex items-center'>
                            <p className='p-2 text-orange-500 font-bold text-[90%]'>TYPE D'OCCUPATION</p>
                            <FaChevronDown className='text-orange-500' />
                        </div>
                        <div className='p-4 text-white flex gap-1'>
                            <p>Numero d'occupation:</p>
                            <p>{occupants}</p>
                        </div>
                        <hr className='text-white' />
                        <div className='flex items-center'>
                            <p className='p-2 text-orange-500 font-bold text-[90%]'>ARCHITECTURE DE LA MAISON</p>
                            <FaChevronDown className='text-orange-500' />
                        </div>
                        <div className='p-4 text-white'>
                            <p>Construction : </p>
                            <p>Mot  : </p>
                            <p>Nr de piece : </p>
                            <p>Hauteur : </p>
                            <p>Iso : </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Typeoccupation;

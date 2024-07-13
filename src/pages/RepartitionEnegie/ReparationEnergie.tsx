import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
const ReparationEnergie: React.FC = () => {
    return (
        <>
            <div className='mx-auto flex justify-between items-center px-20 bg-[#e7e9ed] max-w-7xl'>
                <div className='w-9/12 p-4 bg-white'>
                    <h6 className='text-center font-bold'>Répartion énérgétique moyenne d'un foyer français</h6>
                    <p className='text-center'>Répartion moyenne des consommations énérgétique d'un foyer français <br /> de 4 personnes habitant dans une maison 100m2 <br />La consommation moyenne de chauffage équivaut à 5 euro/m2 chauffé</p>
                </div>
                <div className='w-2/12 p-4 fixed  right-0 top-0 bottom-0 bg-[#333e57] shadow  h-screen'>
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

export default ReparationEnergie;

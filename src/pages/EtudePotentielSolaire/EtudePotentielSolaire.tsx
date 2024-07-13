import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ZoneImplentaion from '../../components/Commercial/ZoneImplentation';
const EtudePotentielSolaire: React.FC = () => {
    const [occupants] = useState<number>(1);
    // Fonction pour gérer l'augmentation du nombre d'occupants
    


    return (
        <>
            <div className='mx-auto flex justify-between items-center px-20 bg-[#e7e9ed] max-w-7xl'>
                <div className='w-9/12 p-4'>
                    <div className='border-white bg-white shadow-inherit'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38388.462123357174!2d2.6321107891210422!3d45.71822603258386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2scd!4v1709653034900!5m2!1sfr!2scd"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <br />
                        <br />
                        <p className='text-center m-5 text-[150%]'>Zone d'implation la plus ensoleilée</p>
                        <ZoneImplentaion />
                        <p className='text-center m-5 text-[150%]'>Exposition du pan</p>
                        <p className='text-center m-5 text-[150%]'>Surface équipable </p>
                        

                    </div>
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

export default EtudePotentielSolaire;

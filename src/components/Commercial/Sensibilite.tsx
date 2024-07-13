import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sensibilite: React.FC = () => {
    const [activeLink, setActiveLink] = useState<number | null>(null);
    const values = ["Pas sensible", "Peu sensible", "Sensible", "Tres sensible", "Extrenement sensible"];

    const handleLinkClick = (index: number) => {
        setActiveLink(index);
    };

    return (
        <div className='p-5 flex justify-center gap-2'>
            {[0, 1, 2, 3, 4].map((index) => (
                <Link key={index} to="" onClick={() => handleLinkClick(index)}>
                    <div className={`border-white rounded p-4 shadow-2xl flex items-center justify-center h-full ${activeLink === index ? 'bg-orange-400 text-white' : 'hover:bg-orange-400 hover:text-white'}`}>
                        <div className="flex flex-col items-center justify-center">
                            <div>
                                <FaHome className='text-[100px]' />
                            </div>
                            <p className='text-center'>{values[index]}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Sensibilite;

import React, { useState } from 'react';

type Tab = 'tab1' | 'tab2' | 'tab3';

const Discours: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('tab1');

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="border-white  bg-white p-4 rounded-[10px] shadow">
            <h2 className="font-bold">Discours</h2>
            <p className="text-gray-500">Utiliser ce discours pour renforcer votre argumentation lors de votre appel</p>
            <div className="w-full">
                <div className="border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="-mb-px flex" aria-label="Tabs">
                            <button
                                onClick={() => handleTabClick('tab1')}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${activeTab === 'tab1' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                Présentation
                            </button>
                            <button
                                onClick={() => handleTabClick('tab2')}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${activeTab === 'tab2' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                Questionnaire
                            </button>
                            <button
                                onClick={() => handleTabClick('tab3')}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${activeTab === 'tab3' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                Conclusion
                            </button>
                        </nav>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
                    {activeTab === 'tab1' && <div>Contenu du Tab 1</div>}
                    {activeTab === 'tab2' && <div>Contenu du Tab 2</div>}
                    {activeTab === 'tab3' && <div>Contenu du Tab 3</div>}
                </div>
            </div>
        </div>
    );
};

export default Discours;
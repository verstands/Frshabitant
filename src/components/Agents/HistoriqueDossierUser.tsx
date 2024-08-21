import React from 'react'

const HistoriqueDossierUser = () => {
  return (
    <div className="border-white bg-white p-4 rounded-[10px] shadow">
      <h2 className="font-bold">Historiques</h2>

      <div className="w-full mb-6">
        <div className="border-b border-gray-200 pb-2 mb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex gap-3" aria-label="Tabs">
              {/* Les éléments de navigation peuvent être ajoutés ici */}
            </nav>
          </div>
        </div>
        <div className='flex items-center gap-2 justify-center border border-gray-300 p-2 rounded'>
            <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1><span>Il y a 2 mois</span>
        </div>
        <div className='flex items-center gap-2 justify-center border border-gray-300 p-2 rounded'>
            <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1><span>Il y a 2 mois</span>
        </div>
      </div>
    </div>
  )
}

export default HistoriqueDossierUser
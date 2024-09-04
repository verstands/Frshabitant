import React from 'react'
import Otbar from '../../components/Agents/Otbar'
import hasAccess from '../../components/hasAcess'
import HistoriqueTable from './HistoriqueTable'
const Historique = () => {
  return (
   <>
     <Otbar title="Espace Historique" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-4">
          <h1 className="text-[#b3b4b6]">Historique / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
      </div>
      <div className="px-20">
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <div className="py-4"></div>
          <br />
          <hr />
         <HistoriqueTable/>
        </div>
      </div>
   </>
  )
}

export default Historique
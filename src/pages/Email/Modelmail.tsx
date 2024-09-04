import React from 'react'
import Otbar from '../../components/Agents/Otbar'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import ModelzMailTable from './ModelzMailTable'

const Modelmail = () => {
  return (
    <>
      <Otbar title="Espace mail" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-4">
          <h1 className="text-[#b3b4b6]">Model / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
        <Link to="/createmodelemail">
          
            <div className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right">
              <FaPlus className="bg-white  p-1 rounded-[50%] text-[#1e58c1]" />
              <p className=" text-white">Nouveu model</p>
            </div>
        </Link>
      </div>
      <ModelzMailTable />
    </>
  )
}

export default Modelmail
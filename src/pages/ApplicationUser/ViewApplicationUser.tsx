import Otbar from '../../components/Agents/Otbar'
import hasAccess from '../../components/hasAcess'
import { Link } from 'react-router-dom'
import ApplicaionUserTable from './ApplicaionUserTable'

const ViewApplicationUser = () => {
  return (
    <>
        <Otbar title="Espace application" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-4">
          <h1 className="text-[#b3b4b6]">Application & utilisateur / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
      </div>
      <div className="px-20">
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          {hasAccess("create") && (
            <Link
              to="/applicationuser"
              className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right"
            >
              Affecter un utilisateur par une appilication
            </Link>
          )}
          <div className="py-4"></div>
          <br />
          <hr />
          {hasAccess("read") && <ApplicaionUserTable />} 
        </div>
      </div>
    </>
  )
}

export default ViewApplicationUser
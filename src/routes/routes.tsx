import { Route, Routes } from 'react-router-dom'

import LayoutAgent from '../components/Agents/LayoutAgent'
import DashboadAgent from '../pages/Dashboad/DashboadAgent'
import CommercialStatistique from '../pages/Commercial/CommercialStatistique'
import Agenda from '../pages/Agenda/Agenda'
import Dossiers from '../pages/Dossiers/Dossiers'
import Prospect from '../pages/Prospect/prospect'
import Appels from '../pages/Appel/Appels'
import LoginAgnt from '../pages/Login/LoginAgnt'
import DashboadCommercial from '../pages/Dashboad/DashboadCommercial'
import Typeoccupation from '../pages/TypeOccpation/Typeoccupation'
import EtudePotentielSolaire from '../pages/EtudePotentielSolaire/EtudePotentielSolaire'
import ReparationEnergie from '../pages/RepartitionEnegie/ReparationEnergie'
import Dashboad from '../pages/Dashboad/Dashboad'
import ViewProspect from '../pages/Prospect/ViewProspect'
import ViewCdr from '../pages/CDR/ViewCdr'
import ViewCampagne from '../pages/Campagne/ViewCampagne'
import CreateCampagne from '../pages/Campagne/CreateCampagne'
import Configuration from '../pages/Configuration/Views/Configuration'
import Utilisateur from '../pages/Configuration/user/Utilisateur'
import MappingCampagne from '../pages/Campagne/MappingCampagne'
import CreateDossier from '../pages/Dossiers/CreateDossier'
import TypeProduit from '../pages/TypeProduit/TypeProduit'
import ViewUser from '../pages/Configuration/user/ViewUser'
import ResulatCampagne from '../pages/Capagne/ResulatCampagne'
import ViewRole from '../pages/Configuration/Role/ViewRole'
import ViewRoleUser from '../pages/Configuration/RoleUser/ViewRoleUser'
import ViewScript from '../pages/Script/ViewScript'
import Script from '../pages/Script/Script'
import RepartiLead from '../pages/Campagne/RepartiLead'

const Routers = () => {
  return (
     <Routes>
        <Route element={<LayoutAgent />}>
            <Route path='/bagent' element={< DashboadAgent />}></Route>
            <Route path='/commercialstatistique' element={< CommercialStatistique />}></Route>
            <Route path='/agenda' element={< Agenda />}></Route>
            <Route path='/dossiers' element={< Dossiers />}></Route>
            <Route path='/createdossier' element={< CreateDossier />}></Route>
            <Route path='/viewProspect' element={< ViewProspect />}></Route>
            <Route path='/viewCdr' element={< ViewCdr />}></Route>
            <Route path='/prospect' element={<ViewProspect />}></Route>
            <Route path='/createProspect' element={< Prospect />}></Route>
            <Route path='/viewCapagne' element={< ViewCampagne />}></Route>
            <Route path='/createCapagne' element={< CreateCampagne />}></Route>
            <Route path='/mapping-campagne' element={< MappingCampagne />}></Route>
            <Route path='/appels' element={< Appels />}></Route>
            <Route path='/typeproduit' element={< TypeProduit/>}></Route>
            <Route path='/user' element={<Utilisateur />}></Route>
            <Route path='/viewUser' element={<ViewUser />}></Route>
            <Route path='/viewRole' element={<ViewRole />}></Route>
            <Route path='/viewRoleUser' element={<ViewRoleUser />}></Route>
            <Route path='/script' element={<ViewScript />}></Route>
            <Route path='/resultatcampagne' element={<ResulatCampagne />}></Route>
            <Route path='/scripts' element={<Script />}></Route>
            <Route path='/reaprtilead' element={<RepartiLead />}></Route>
        </Route>
        <Route path='/' element={< LoginAgnt />}></Route>
        <Route path='/dashboard' element={< Dashboad />}></Route>
        <Route path='/bcommercial' element={< DashboadCommercial />}></Route>
        <Route path='/typeoccupation' element={< Typeoccupation />}></Route>
        <Route path='/etudepotentiel' element={< EtudePotentielSolaire />}></Route>
        <Route path='/repartition' element={<ReparationEnergie />}></Route>
        <Route path='/bconfiguration' element={<Configuration />}></Route>
     </Routes>
  )
}

export default Routers
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
import ScriptUpdate from '../pages/Script/ScriptUpdate'
import DetailProsect from '../pages/Prospect/DetailProsect'
import DetailDossier from '../pages/Dossiers/DetailDossier'
import ViewTypeChauffage from '../pages/Configuration/Typechauffage/ViewTypeChauffage'
import TypeChauffage from '../pages/Configuration/Typechauffage/TypeChauffage'
import ViewTypeProduit from '../pages/TypeProduit/ViewTypeProduit'
import CreateTypeProduit from '../pages/TypeProduit/CreateTypeProduit'
import Modelmail from '../pages/Email/Modelmail'
import CreateModelEmail from '../pages/Email/CreateModelEmail'
import Fonction from '../pages/Fonction/Fonction'
import CreateFonction from '../pages/Fonction/CreateFonction'
import Resetpassword from '../pages/resetPassword/resetpassword'
import ApplicationUser from '../pages/ApplicationUser/ApplicationUser'
import ViewApplicationUser from '../pages/ApplicationUser/ViewApplicationUser'
import RoleUser from '../pages/Configuration/RoleUser/RoleUser'

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
            <Route path='/appels/:id' element={< Appels />}></Route>
            <Route path='/appels' element={< Appels />}></Route>
            <Route path='/appels/campagne/:idcampagne' element={< Appels />}></Route>
            <Route path='/typeproduit' element={< TypeProduit/>}></Route>
            <Route path='/viewtypeproduit' element={< ViewTypeProduit/>}></Route>
            <Route path='/user' element={<Utilisateur />}></Route>
            <Route path='/viewUser' element={<ViewUser />}></Route>
            <Route path='/viewRole' element={<ViewRole />}></Route>
            <Route path='/viewRoleUser' element={<ViewRoleUser />}></Route>
            <Route path='/createRoleUser' element={<RoleUser />}></Route>
            <Route path='/script' element={<ViewScript />}></Route>
            <Route path='/resultatcampagne' element={<ResulatCampagne />}></Route>
            <Route path='/scripts' element={<Script />}></Route>
            <Route path='/scriptupdate/:id' element={<ScriptUpdate />}></Route>
            <Route path='/reaprtilead' element={<RepartiLead />}></Route>
            <Route path='/detailProspect/:id' element={<DetailProsect />}></Route>
            <Route path='/detailDossier/:id' element={<DetailDossier />}></Route>
            <Route path='/typechauffage' element={<ViewTypeChauffage />}></Route>
            <Route path='/createtypechauffage' element={<TypeChauffage />}></Route>
            <Route path='/createtypeproduit' element={<CreateTypeProduit />}></Route>
            <Route path='/modelemail' element={<Modelmail />}></Route>
            <Route path='/createmodelemail' element={<CreateModelEmail />}></Route>
            <Route path='/fonction' element={<Fonction />}></Route>
            <Route path='/createFonction' element={<CreateFonction />}></Route>
            <Route path='/applicationuser' element={<ApplicationUser />}></Route>
            <Route path='/viewapplicationuser' element={<ViewApplicationUser />}></Route>
        </Route>
        <Route path='/' element={< LoginAgnt />}></Route>
        <Route path='/dashboard' element={< Dashboad />}></Route>
        <Route path='/bcommercial' element={< DashboadCommercial />}></Route>
        <Route path='/typeoccupation' element={< Typeoccupation />}></Route>
        <Route path='/etudepotentiel' element={< EtudePotentielSolaire />}></Route>
        <Route path='/repartition' element={<ReparationEnergie />}></Route>
        <Route path='/bconfiguration' element={<Configuration />}></Route>
        <Route path='/resetpassword/:email' element={<Resetpassword />}></Route>
     </Routes>
  )
}

export default Routers
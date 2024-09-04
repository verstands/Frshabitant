import { useState, useEffect } from 'react';

interface Module {
  id: string;
  nom: string;
  id_fonction: string;
  ModulesPrivilege?: {
    id: string;
    id_module: string;
    id_privilege: string;
    privileges: {
      id: string;
      initule: string;
    };
  }[];
}

interface Fonction {
  id: string;
  initule: string;
  Modules: Module[];
}

interface Agent {
  id: string;
  nom: string;
  prenom: string;
  mdp: string;
  id_fonction: string;
  statut: string;
  email: string;
  fonction: Fonction;
}

const useHasModule = (moduleName: string): boolean => {
  const [hasModule, setHasModule] = useState<boolean>(false);

  useEffect(() => {
    const agentData = JSON.parse(sessionStorage.getItem("user") || "{}") as Agent;

    const hasModule = agentData &&
      agentData.fonction &&
      agentData.fonction.Modules &&
      agentData.fonction.Modules.some(m => m.nom === moduleName);

    setHasModule(hasModule);
    console.log(agentData);
  }, [moduleName]);

  return hasModule;
};

export default useHasModule;

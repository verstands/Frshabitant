export interface ProspectInterface {
    nom: string;
    code : string;
    email: string;
    id_user : string;
    telephone: string;
    prenom: string;
    adresse: string;
    ville: string;
    codepostal: string;
    surface: string;
    id_typechauffage: string;
    id_typerevenu: string;
    id_campagne: string;
    id_produit: string;
    status: string;
    statusdossier?: string;
    typelead: string;
    id?: string
    agentpospect? : object
    produitpospect?: object 
    capagnepospect?: object 
}
  
export interface ProspectInterface {
    nom: string;
    prenom: string;
    code : string;
    email: string;
    id_user : string;
    telephone: string;
    adresse: string;
    ville: string;
    codepostal: string;
    surface: string;
    id_typechauffage: string;
    id_typerevenu: string;
    id_campagne: string;
    id_produit: string;
    status: string;
    typelead: string;
    id?: string
    agentpospect? : object
    produitpospect?: object 
    capagnepospect?: object 
}
  
export interface ModelMailInterface {
    id_user: string;
    active: string;
    bccexp : string;
    ccexp: string;
    contenue: string;
    description: string;
    disnataireexp: string;
    emailexp: string;
    fichier: string;
    nom: string;
    nomexp: string;
    id_campagne: string;
    id_fonction: string;
    sujet: string;
    id?: string
    agentmodel? : object
    capagnemodel?: object 
    fonctionmodel?: object 
}
  
export interface CampagneInterfce {  
    titre: string;
    id? : string;
    id_produit: string;
    statut: string;
    nouveau: string;
    nrp: string;
    rdv: string;
    nonvalide: string;
    nrptermine: string;
    total: string;
    distribue: string;
    restant: string;
    produit? : object;
    statusCounts? : object;
}
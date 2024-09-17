export interface CategorieRoleInterface {  
    id_role: string;
    id? : string;
    id_categorie: string;
    role?: {
        id : string,
        initule : string,
    };
    categorie? : {
        id : string,
        idetape : string,
        libelle: string,
        ordre: string,
        statut : string
    }
}
export interface ModuleInterface {
    id?: string;
    id_fonction : string;
    id_module : string;
    moduleperso? : {
        id : string,
        libelle : string,
        statut : string,
    };
}
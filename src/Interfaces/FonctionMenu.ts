export interface FonctionMenuInterface {  
    id?: string;
    idmenu: string;
    idfonciton: string;
    menu? : {
        id : string,
        nom : string
        url : string
        icon : string
    },
    fonction? : object
}
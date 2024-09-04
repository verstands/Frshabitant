export interface HistoriqueInterface {  
    action: string;
    endpoint: string;
    user: string;
    processingTime: number;
    ip?: string;
    userAgent?: string;
    latitude?: string;
    longitude?: string;
    os: string;
    browser: string;
    isp: string;
    pays: string;
    id?: string;
    createdAt: string;
}
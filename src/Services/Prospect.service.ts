import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { ProspectInterface } from '../Interfaces/ProspectInterface';

class ProspectService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postProspect(prospect: ProspectInterface): Promise<T> {
    try {
      const response = await this.postFind$('pospect', prospect);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getProspect(): Promise<T> {
    try {
      const response = await this.find$('pospect');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getOne(): Promise<T> {
    try {
      const response = await this.find$('pospect/one/one');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  
  async getOneCampagne(id:string): Promise<T> {
    try {
      const response = await this.find$(`pospect/oneCampagne/oneCampagne/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getcountNouveau(): Promise<T> {
    try {
      const response = await this.find$('pospect/countNouveau/countNouveau');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getProspectId(id:string): Promise<T> {
    try {
      const response = await this.find$(`pospect/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async updataNRP(id:string): Promise<T> {
    try {
      const response = await this.patch$(`pospect/nrp/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
  async updataRDV(id:string): Promise<T> {
    try {
      const response = await this.patch$(`pospect/rdv/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async updataNonValide(id:string): Promise<T> {
    try {
      const response = await this.patch$(`pospect/nonvalide/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async updataPasInteresse(id:string): Promise<T> {
    try {
      const response = await this.patch$(`pospect/pasinteresse/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async updataNPP(id:string): Promise<T> {
    try {
      const response = await this.patch$(`pospect/npp/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async updataMN(id:string): Promise<T> {
    try {
      const response = await this.patch$(`pospect/mn/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async updataFL(id:string): Promise<T> {
    try {
      const response = await this.patch$(`pospect/fl/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async updateProspect(id: string, commentaire: T): Promise<T> {
    try {
      const response = await this.update$(commentaire, `pospect/${id}`);
      return response;
    } catch (error: any) {
      console.error('Erreur lors de la requête updateCommentaire:', error.message);
      throw error;
    }
  } 
  
}

export default ProspectService;

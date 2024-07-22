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

  async getProspectId(id:string): Promise<T> {
    try {
      const response = await this.find$(`pospect/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default ProspectService;

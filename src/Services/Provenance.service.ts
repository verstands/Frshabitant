import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class ProvenanceService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postProvenance(nom: string): Promise<T> {
    const requestBody = { nom };
    try {
      const response = await this.postFind$('provenance', requestBody);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getProvenance(): Promise<T> {
    try {
      const response = await this.find$('provenance');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default ProvenanceService;

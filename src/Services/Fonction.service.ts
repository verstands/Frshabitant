import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { FonctionInterface } from '../Interfaces/FonctionInterface';

class FonctionService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postFonction(foncton: FonctionInterface): Promise<T> {
    try {
      const response = await this.postFind$('fonction', foncton);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getFonction(): Promise<T> {
    try {
      const response = await this.find$('fonction');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default FonctionService;

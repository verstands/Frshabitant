import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class HistoriqueService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async getHistorique(): Promise<T> {
    try {
      const response = await this.find$('logging');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default HistoriqueService;

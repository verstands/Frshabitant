import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class InvaliditeService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postInvalidite(nom: string): Promise<T> {
    const requestBody = { nom };
    try {
      const response = await this.postFind$('invalidite', requestBody);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getInvalidite(): Promise<T> {
    try {
      const response = await this.find$('invalidite');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default InvaliditeService;

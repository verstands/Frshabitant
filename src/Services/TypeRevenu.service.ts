import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class TypeRevenuService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postTypeRevenu(nom: string): Promise<T> {
    const requestBody = { nom };
    try {
      const response = await this.postFind$('typerevenu', requestBody);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getTypeRevenu(): Promise<T> {
    try {
      const response = await this.find$('typerevenu');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default TypeRevenuService;

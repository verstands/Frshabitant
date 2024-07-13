import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class ScriptService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postScript(titre: string, contenu: string, position: string): Promise<T> {
    const requestBody = { titre, contenu, position };
    try {
      const response = await this.postFind$('script', requestBody);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getScript(): Promise<T> {
    try {
      const response = await this.find$('script');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default ScriptService;

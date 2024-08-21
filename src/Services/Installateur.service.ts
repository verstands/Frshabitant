import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class InstallateurService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postInstallateur(nom: string): Promise<T> {
    const requestBody = { nom };
    try {
      const response = await this.postFind$('installateur', requestBody);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getInstallateur(): Promise<T> {
    try {
      const response = await this.find$('installateur');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default InstallateurService;

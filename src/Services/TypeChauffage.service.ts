import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class TypechauffageService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postTypeChauffage(nom: string): Promise<T> {
    const requestBody = { nom };
    try {
      const response = await this.postFind$('typechauffage', requestBody);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getTypeChauffages(): Promise<T> {
    try {
      const response = await this.find$('typechauffage');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default TypechauffageService;

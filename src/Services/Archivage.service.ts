import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class ArchivageService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postArchivage(nom: string): Promise<T> {
    const requestBody = { nom };
    try {
      const response = await this.postFind$('archivage', requestBody);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getArchivage(): Promise<T> {
    try {
      const response = await this.find$('archivage');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default ArchivageService;

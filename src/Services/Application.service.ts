import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { ApplicationInterface } from '../Interfaces/ApplicationInterface';

class ApplicationService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postApplication(data: ApplicationInterface): Promise<T> {
    try {
      const response = await this.postFind$('application', data);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getApplication(): Promise<T> {
    try {
      const response = await this.find$('application');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default ApplicationService;

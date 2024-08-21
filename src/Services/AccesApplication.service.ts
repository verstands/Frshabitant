import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { AccesApplicationInterface } from '../Interfaces/AccesApplication';

class AccesApplicationService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postApplicationacces(data: AccesApplicationInterface): Promise<T> {
    try {
      const response = await this.postFind$('accesapplication', data);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getApplicationacces(): Promise<T> {
    try {
      const response = await this.find$('accesapplication');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default AccesApplicationService;

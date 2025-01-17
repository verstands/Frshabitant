import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { StatusInterface } from '../Interfaces/Status.interface';

class StatuService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postStatut(data: StatusInterface): Promise<T> {
    try {
      const response = await this.postFind$('status', data);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getStatus(): Promise<T> {
    try {
      const response = await this.find$('status');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getStatusCatgorie(id:string): Promise<T> {
    try {
      const response = await this.find$(`status/categorie/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default StatuService;

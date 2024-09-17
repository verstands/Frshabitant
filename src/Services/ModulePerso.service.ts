import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { ModulePersoInterface } from '../Interfaces/ModulePersoInterface';

class ModulePersoService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postModuleperso(data : ModulePersoInterface): Promise<T> {
    try {
      const response = await this.postFind$('moduleperso', data);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getModuleperso(): Promise<T> {
    try {
      const response = await this.find$('moduleperso');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default ModulePersoService;

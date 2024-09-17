import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { ModuleInterface } from '../Interfaces/ModuleInterface';

class ModuleService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postModule(data : ModuleInterface): Promise<T> {
    try {
      const response = await this.postFind$('modules', data);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getModule(): Promise<T> {
    try {
      const response = await this.find$(`modules`);
      return response;
    } catch (error: any) {
      console.error('Error during fetching historique:', error.message);
      throw error;
    }
  }

  async getModuleFonciton(id:string): Promise<T> {
    try {
      const response = await this.find$(`modules/modulefonciton/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
}

export default ModuleService;

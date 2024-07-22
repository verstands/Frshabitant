import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { ScriptInterface } from '../Interfaces/ScriptInterface';

class ScriptService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postScript(requestBody: ScriptInterface): Promise<T> {
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

  async getScriptById(id: string): Promise<ScriptInterface> {
    try {
      const response = await this.find$('script', id);
      return response.data;
    } catch (error: any) {
      console.error('Error during get script by ID request:', error.message);
      throw error;
    }
  }

  async getScriptByIdProduit(id: string): Promise<ScriptInterface> {
    try {
      const response = await this.find$(`script/produit/${id}`);
      return response.data;
    } catch (error: any) {
      console.error('Error during get script by ID request:', error.message);
      throw error;
    }
  }

  async updateScript(id: string, scriptInterface: ScriptInterface): Promise<ScriptInterface> {
    try {
      const response = await this.update$('script', id, scriptInterface);
      return response.data;
    } catch (error: any) {
      console.error('Error during update script request:', error.message);
      throw error;
    }
  }
  
}

export default ScriptService;

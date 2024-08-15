import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { ModelMailInterface } from '../Interfaces/ModelMailInterface';

class ModelMailService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postModelmail(data: ModelMailInterface): Promise<T> {
    try {
      const response = await this.postFind$('modelmail', data);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getModelmail(): Promise<T> {
    try {
      const response = await this.find$('modelmail');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getModelmailMail(id_campagne:string, id_fonction: string): Promise<T> {
    try {
      const response = await this.find$(`modelmail/mail/${id_campagne}/${id_fonction}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getModelmailId(id:string): Promise<T> {
    try {
      const response = await this.find$(`modelmail/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default ModelMailService;

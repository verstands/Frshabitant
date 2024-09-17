import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { EtapeWorkFlowInterface } from '../Interfaces/EtapeWorkFlowInterface';
import { CategorieWorkFlowInterface } from '../Interfaces/CategorieWorkFlow';

class CategorieWorkFlowService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async getCategorieWorkFlow(): Promise<T> {
    try {
      const response = await this.find$('categorieworkflow');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getCategorieWorkFlowId(id:string): Promise<T> {
    try {
      const response = await this.find$(`categorieworkflow/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
  async postCategorieWorkFlow(foncton: CategorieWorkFlowInterface): Promise<T> {
    try {
      const response = await this.postFind$('categorieworkflow', foncton);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getCategorieWorkFlowEtape(id:string): Promise<T> {
    try {
      const response = await this.find$(`categorieworkflow/etape/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
}


export default CategorieWorkFlowService;

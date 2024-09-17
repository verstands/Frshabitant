import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { EtapeWorkFlowInterface } from '../Interfaces/EtapeWorkFlowInterface';
import { WorkFlowInterface } from '../Interfaces/WorkFlowInterface';

class WorkFlowInterService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async getWorkFlow(): Promise<T> {
    try {
      const response = await this.find$('workflow');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getWorkFlowId(id:string): Promise<T> {
    try {
      const response = await this.find$(`workflow/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
  async postWorkFlow(foncton: WorkFlowInterface): Promise<T> {
    try {
      const response = await this.postFind$('workflow', foncton);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getWorkFlowEtape(id:string): Promise<T> {
    try {
      const response = await this.find$(`etapeworkflow/etape/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
}


export default WorkFlowInterService;

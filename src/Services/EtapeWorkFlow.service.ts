import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { EtapeWorkFlowInterface } from '../Interfaces/EtapeWorkFlowInterface';

class EtapeWorkFlowInterService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async getEtapeWorkFlow(): Promise<T> {
    try {
      const response = await this.find$('etapeworkflow');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getEtapeWorkFlowId(id:string): Promise<T> {
    try {
      const response = await this.find$(`etapeworkflow/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
  async postEtapeWorkFlow(foncton: EtapeWorkFlowInterface): Promise<T> {
    try {
      const response = await this.postFind$('etapeworkflow', foncton);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getEtapeWorkFlowEtape(id:string): Promise<T> {
    try {
      const response = await this.find$(`etapeworkflow/work/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
}


export default EtapeWorkFlowInterService;

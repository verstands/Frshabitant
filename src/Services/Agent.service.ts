import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { UserInterface } from '../Interfaces/UserInterface';

class AgentService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postAgent(agent: UserInterface): Promise<T> {
    try {
      const response = await this.postFind$('auth', agent);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getAgent(): Promise<T> {
    try {
      const response = await this.find$('agent');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}
export default AgentService;

import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class AgentService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postAgent(nom: string, prenom: string, mdp: string, statut: string, email: string): Promise<T> {
    const requestBody = { nom, prenom, mdp, statut, email };
    try {
      const response = await this.postFind$('auth', requestBody);
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

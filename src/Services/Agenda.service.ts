import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { UserInterface } from '../Interfaces/UserInterface';
import { AgendaInterface } from '../Interfaces/AgendaInterface';

class AgendaService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postAgenda(agent: AgendaInterface): Promise<T> {
    try {
      const response = await this.postFind$('agenda', agent);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getAgenda(): Promise<T> {
    try {
      const response = await this.find$('agenda');
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}
export default AgendaService;

import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { HistoriqueAfficheInterface } from '../Interfaces/HistoriqueAfficheInterface';

class HistoriqueAfficheService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postHistoriqueAffiche(data: HistoriqueAfficheInterface): Promise<T> {
    try {
      const response = await this.postFind$('historiqueaffiche', data);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getHistoriqueAffiche(id: string | undefined, { prospect, user }: { prospect: string; user: string; }): Promise<T> {
    try {
      const response = await this.find$(`historiqueaffiche/${prospect}/${user}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default HistoriqueAfficheService;

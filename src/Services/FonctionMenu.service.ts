import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { FonctionMenuDInterface } from '../Interfaces/FonctionMenuDInterface';

class FonctionMenuService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postFonctionMenuService(foncton: FonctionMenuDInterface): Promise<T> {
    try {
      const response = await this.postFind$('fonctionmenu', foncton);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default FonctionMenuService;

import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class MenuService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async getMenu(): Promise<T> {
    try {
      const response = await this.find$('menu');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
  
  async getMenuFonciton(id:string): Promise<T> {
    try {
      const response = await this.find$(`fonctionmenu/fonctionmenu/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
}

export default MenuService;

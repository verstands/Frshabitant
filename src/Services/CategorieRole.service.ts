import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { CategorieRoleInterface } from '../Interfaces/CategorieRoleInterface';

class CategorieRoleService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postCategorieROle(prospect: CategorieRoleInterface): Promise<T> {
    try {
      const response = await this.postFind$('categorierole', prospect);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getCategorieROleAction(id : string): Promise<T> {
    try {
      const response = await this.find$(`categorierole/categorierole/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getCategorieROle(): Promise<T> {
    try {
      const response = await this.find$('categorierole');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default CategorieRoleService;

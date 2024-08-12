import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { RoleInterface } from '../Interfaces/RoleInterface';

class RoleUserService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postRoleUser(data : RoleInterface): Promise<T> {
    try {
      const response = await this.postFind$('accerole', data);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getRoleUser(): Promise<T> {
    try {
      const response = await this.find$('accerole');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default RoleUserService;

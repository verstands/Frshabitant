import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class RoleUserService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postRoleUser(id_user: string, id_role: string): Promise<T> {
    const requestBody = { id_user, id_role };
    try {
      const response = await this.postFind$('accerole', requestBody);
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

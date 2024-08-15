import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';


class LoginService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async login(email: string, password: string): Promise<T> {
    const requestBody = { email, password };
    try {
      const response = await this.postFind$('auth/login', requestBody);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message)
      throw error;
    }
  }
  
}

export default LoginService;
import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import axios from 'axios';


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

    async dataIp() {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const data = response.data;
        return data;
      } catch (error: any) {
        console.error('Error fetching IP data:', error.message);
        throw error;
      }
    }
  
}

export default LoginService;
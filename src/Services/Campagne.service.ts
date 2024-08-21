import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { CampagneInterfce } from '../Interfaces/CampagneInterface';

class CampagneService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postCampagne(prospect: CampagneInterfce): Promise<T> {
    try {
      const response = await this.postFind$('capamgne', prospect);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getCampagne(): Promise<T> {
    try {
      const response = await this.find$('capamgne');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default CampagneService;

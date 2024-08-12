import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { TypeProduitInterface } from '../Interfaces/TypeProduitInterface';

class TypeProduitService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postTypeProduit(data: TypeProduitInterface): Promise<T> {
    try {
      const response = await this.postFind$('typeproduit', data);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getTypeProduit(): Promise<T> {
    try {
      const response = await this.find$('typeproduit');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default TypeProduitService;

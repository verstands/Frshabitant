import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';

class PieceJointService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postPieceJoint(data: FormData): Promise<T> {
    try {
      const response = await this.postFindFile$('piecejoint', data);
      return response.data;
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi du fichier :', error.message);
      throw error;
    }
  }

  async getPieceJoint(): Promise<T> {
    try {
      const response = await this.find$('piecejoint');
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  
}

export default PieceJointService;

import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { CommenatareInterface } from '../Interfaces/CommentaireInterface';

class CommentaireService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postCommentaire(foncton: CommenatareInterface): Promise<T> {
    try {
      const response = await this.postFind$('commentaire', foncton);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
  async getCommentaire(id_user:string, id_prospect:string): Promise<T> {
    try {
      const response = await this.find$(`commentaire/${id_user}/${id_prospect}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getCommentaireId(id:string): Promise<T> {
    try {
      const response = await this.find$(`commentaire/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }  

}

export default CommentaireService;

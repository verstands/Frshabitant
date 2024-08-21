import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { MailInterface } from '../Interfaces/MailInterface';

class MailService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postMail(data: MailInterface): Promise<T> {
    try {
      const response = await this.postFind$('mail', data);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }
}

export default MailService;

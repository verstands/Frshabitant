import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { UserInterface } from '../Interfaces/UserInterface';
import { toast } from 'react-toastify';

class AgentService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postAgent(agent: UserInterface): Promise<T> {
    try {
      const response = await this.postFind$('auth', agent);
      return response.data;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getAgent(): Promise<T> {
    try {
      const response = await this.find$('agent');
      return response;
    } catch (error: any) {
      toast.error(error.response.message);
      throw error;
    }
  }

  async resetPassword(email: string, newPassword: string): Promise<any> {
    try {
      const response = await this.updates$({ newPassword }, `auth/reset-password/${email}`);
      return response;
    } catch (error: any) {
      console.error('Error during password reset request:', error.message);
      throw error;
    }
  }

  async deleteAgent(id:string): Promise<T> {
    try {
      const response = await this.delete$(`agent/${id}`);
      return response;
    } catch (error: any) {
      console.error('Error during login request:', error.message);
      throw error;
    }
  }

  async getAgentsByFonctions(ids: string[]): Promise<T> {
    try {
      const response = await this.postFind$('agent/by-fonctions', { fonctionIds: ids });
      return response.data;
    } catch (error: any) {
      console.error('Error during getAgentsByFonctions request:', error.message);
      throw error;
    }
  }
  
  
}
export default AgentService;

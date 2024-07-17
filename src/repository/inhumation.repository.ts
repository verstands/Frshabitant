import { AxiosResponse } from 'axios';
import axiosClient from '../axiosClient';
import { RepositoryConfigInterface } from '../Interfaces/RepositoryConfig.interface';
import { toast } from "react-toastify";


abstract class Repository<T> {
  protected readonly appConfig: object;
  protected readonly dialog: object;

  constructor(config: RepositoryConfigInterface) {
    this.appConfig = config.appConfig;
    this.dialog = config.dialog;
  }

  findImage$(uri: string | undefined): Promise<T[] | T> {
    return axiosClient.get(`${uri}`);
  }

  putFind$(uri: string | undefined, data?: object): Promise<T[] | T | object> {
    return axiosClient.put(`${uri}`, data)
    .catch(error => {
      if (error.response.status != 403 || error.response.status != 500) {
         alert(error.response.data.message)
      }
      throw error;
    });
  }

  postFind$(uri: string, data?: object): Promise<AxiosResponse<T>> {
    return axiosClient.post<T>(`${uri}`, data)
    .catch(error => {
      if (error.response.status !== 403 || error.response.status !== 500) {
          toast.error(`${error.response.data.message}`)
      }
      throw error;
    });
  }

  find$(uri: string | undefined): Promise<T> {
    return axiosClient.get(`${uri}`)
    .then(response => response.data)
    .catch(error => {
       if (error.response.status!= 403 || error.response.status!= 500) {
         alert(error.response.data.message)
       }
       throw error;
     });
  }

  save$(data: T, uri: string): Promise<T> {
    return axiosClient.post(`${uri}`, data)
    .then(response => response.data)
    .catch(error => {
       if (error.response.status!= 403 || error.response.status!= 500) {
         alert(error.response.data.message)
       }
       throw error;
     });
  }

  update$(data: T, uri: string | undefined): Promise<T> {
    return axiosClient.put(`${uri}`, data)
    .then(response => response.data)
    .catch(error => {
       if (error.response.status!= 403 || error.response.status!= 500) {
         alert(error.response.data.message)
       }
       throw error;
     });
  }

  delete$(uri: string | undefined): Promise<T> {
    return axiosClient.delete(`${uri}`)
    .then(response => response.data)
    .catch(error => {
       if (error.response.status!= 403 || error.response.status!= 500) {
         alert(error.response.data.message)
       }
       throw error;
     });
  }

  patch$(data: T, uri: string | undefined): Promise<T> {
    return axiosClient.patch(`${uri}`, data)
    .then(response => response.data)
    .catch(error => {
       if (error.response.status!= 403 || error.response.status!= 500) {
         alert(error.response.data.message)
       }
       throw error;
     });
  }
}

export default Repository;
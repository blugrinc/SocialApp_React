import { axiosClient } from "./axiosClient";
import { Post } from "../app/model/post";

export const postApi = {
  async getAll(endpoint: string): Promise<Post[]> {
    return axiosClient.get(endpoint)
      .then(response => {
        const data = response.data
        return data;
      })
      .catch(error => {
        console.error(error);
        return Promise.reject(error);
      })
  },
  async add(endpoint: string, data: Post): Promise<Post> {
    return axiosClient.post(endpoint, data)
  },
  async patch(endpoint: string, data: Post): Promise<Post> {
    return axiosClient.patch(endpoint, data)
  },
  async delete(endpoint: string): Promise<any> {
    return axiosClient.delete(endpoint).then(response => response.data)
  }
}



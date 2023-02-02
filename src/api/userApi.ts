import { axiosClient } from "./axiosClient";
import { User } from "../app/model/user";

export const userApi = {
    async getAll(endpoint: string): Promise<User[]> {
        return axiosClient.get(endpoint)
            .then(response => {
                const data = response.data
                return data;
            })
            .catch(error => {
                console.error(error);
                return Promise.reject(error);
            })
    }
}

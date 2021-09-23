import * as axios from "axios";

// Создаем как-бы axios подключение. Экземпляр аксиуса. Базовые настройки.
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9bc59add-c579-472c-a6ae-ed1a5901fb82"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data); // отдаем компоненте только data
    },
    follow(id){
        return instance.post(`follow/${id}`,{}).then(response => response.data);
    },
    unfollow(id){
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}

import * as axios from "axios";

// Создаем как-бы axios подключение. Экземпляр аксиуса. Базовые настройки.
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9bc59add-c579-472c-a6ae-ed1a5901fb82_"
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
    },
    getProfile(userId){
        console.log('Obsolete method. Please use profileAPI method');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status});
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login (email, password, rememberMe = false, captcha = null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout (){
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`);
    }
}

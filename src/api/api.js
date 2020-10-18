import * as axios from 'axios';

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "a95ba110-1876-4682-9ad0-785d9af21b91"
    }
});



export const authAPI = {
    requestAuthMe() {
        return instans.get('auth/me');
    },
    login( email, password, rememberMe = false ) {
        return instans.post('auth/login', { email, password, rememberMe })
    },
    logout() {
        return instans.delete('auth/login');
    }
};

export const profileAPI = {
    requestProfile(userId) {
        return instans.get(`profile/` + userId);
    },
    requestStatus (userId) {
        return instans.get(`profile/status/` + userId);
    },
    updateStatus (status) {
        return instans.put(`profile/status/`, { status: status })
        // смотри документацию API, чтоб знать что отрпавить на сервер. В данном случае status
    },
};

export const usersAPI = {
    requestUsers(activePage, count) {
        return instans.get(`users?page=${activePage}&count=${count}`)
        .then(response => response.data)
    }
};

export const followAPI = {
    follow(id) {
        return instans.post(`follow/${id}`)
    },
    unFollow(id) {
        return instans.delete(`follow/${id}`)
    }
};
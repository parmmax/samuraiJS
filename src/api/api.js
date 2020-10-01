import * as axios from 'axios';

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "a95ba110-1876-4682-9ad0-785d9af21b91"
    }
});



export const authAPI = {
    getAuthMe() {
        return instans.get('auth/me')
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instans.get(`profile/` + userId)
    },
    getStatus (userId) {
        return instans.get(`profile/status/` + userId)
    },
    updateStatus (status) {
        return instans.put(`profile/status/`, { status: status })
        // смотри документацию API, чтоб знать что отрпавить на сервер. В мое случае status
    },
};

export const usersAPI = {
    getUsers(activePage, count) {
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
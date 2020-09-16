import * as axios from 'axios';

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "a95ba110-1876-4682-9ad0-785d9af21b91"
    }
});

export const usersAPI = {
    getUsers(activePage = 1, count = 10) {
        return instans.get(`users?page=${activePage}&count=${count}`)
        .then(response => response.data)
    }
}

export const followAPI = {
    postFollow(id) {
        return instans.post(`follow/${id}`)
        .then(response => response.data)
    },
    deleteFollow(id) {
        return instans.delete(`follow/${id}`)
        .then(response => response.data)
    }
}

export const authAPI = {
    getAuthMe() {
        return instans.get('auth/me')
    }
}
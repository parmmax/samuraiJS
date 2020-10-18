import { createSelector } from 'reselect'

const getUsersPrimitive = (state) => {
   return state.usersPage.users;
}

export const getUsers = createSelector(getUsersPrimitive, (users) => {
   return users.filter(u => true);
})

export const getActivePage = (state) => {
   return state.pagination.activePage;
}

export const getCountPerPage = (state) => {
   return state.pagination.countPerPage;
}

export const getTotalCount = (state) => {
   return state.pagination.totalCount;
}

export const getIsFetching = (state) => {
   return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
   return state.usersPage.followingInProgress;
}
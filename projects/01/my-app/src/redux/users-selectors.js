import {createSelector} from "reselect";

// Это простой примитивный селектор
const getUsersSelector = (state) => {
    return state.usersPage.users;
}

/* Это уже более сложный селектор включающий в себя результат примитивного селектора,
* и он запустится только если увидит изменения в примитивном селекторе */
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
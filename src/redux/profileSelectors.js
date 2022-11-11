export const getPosts = (state) => {
    return state.profilePage.posts
}
export const getCurrentPage = (state) => {
    return state.profilePage.currentPage
}
export const getIsFetching = (state) => {
    return state.profilePage.isFetching
}
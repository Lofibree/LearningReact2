import { createSelector } from "reselect"

const getPostsSelector = (state) => {
    return state.profilePage.posts
}
export const getPosts = createSelector(getPostsSelector, (posts) => {
   return posts.filter(p => true)
})
export const getCurrentPage = (state) => {
    return state.profilePage.currentPage
}
export const getIsFetching = (state) => {
    return state.profilePage.isFetching
} 
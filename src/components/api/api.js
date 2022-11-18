import axios from 'axios'

// INSTANSES
const instanseSAMURAI = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7d7bebbc-b6c1-4cca-8529-c6865bf02b97"
    }
})
const instanseJSONPLACE = axios.create({
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com/'
})
const instanseCAT = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/',
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
    }
})
const instanseVK = axios.create({
    withCredentials: true,
    baseURL: 'https://api.vk.com/method/friends.search?',
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
    }
})
const instanseBrBad = axios.create({
    baseURL: 'https://www.Breakingbadapi.com/api/'
})

// API'S
export const BrBadAPI = {
    async getCharacters(pageSize, currentPage) {
        const response = await instanseBrBad.get(`characters?limit=${pageSize}&offset=${currentPage*10}`);
        return response.data
        
    },
    async getRandomCharacters() {
        const response = await instanseBrBad.get(`character/random?limit=3`);
        return response.data;
    },
    async getParticularCharacter(id) {
        // debugger;
        const response = await instanseBrBad.get(`characters/${id}`);
        // debugger;
        return response.data;
    },
}
export const loginAPI = {
    async setIsAuth() {
        const response = await instanseSAMURAI.get('auth/me')
        return response.data
    },
    async login(email, password) {
        const response = await instanseSAMURAI.post(`auth/login`, { email, password })
        return response.data
    },
    async logout() {
        const response = await instanseSAMURAI.delete(`auth/login`)
        return response.data
    },
}
export const postsAPI = {
    async setPosts(currentPage) {
        const response = await instanseJSONPLACE.get(`posts?_limit=10&_page=${currentPage}`)
        return response.data
    },
    async setOnPagePosts(pageSize, pageNumber) {
        const response = await instanseJSONPLACE.get(`posts?_limit=${pageSize}&_page=${pageNumber}`)
        return response.data
    },
    async setParticularPost(id) {
        const response = await instanseJSONPLACE.get(`posts/${id}`)
        return response.data 
    },
    async setComments(id) {
        const response = await instanseJSONPLACE.get(`comments?postId=${id}`)
        return response.data
    },
    async updateStatus(status) {
        const response = await instanseSAMURAI.put(`profile/status`, { status })
        return response.data
    },
    async getStatus(id) {
        const response = await instanseSAMURAI.get(`profile/status/${id}`)
        return response.data
    },
    // deletePost(id) {
    //     return instanseJSONPLACE.delete(`posts/${id}`)
    //     .then(response => {
    //         debugger;
    //         return response.data
    //     })
    // },
}
export const usersAPI = {
    async setUsers(pageSize, currentPage) {
        const response = await instanseSAMURAI.get(`users?count=${pageSize}&page=${currentPage}`)
        return response.data
    },
    async onPageSetUsers(pageSize, pageNumber) {
        const response = await instanseSAMURAI.get(`users?count=${pageSize}&page=${pageNumber}`)
        return response.data
    },
    async setFollow(userId) {
        const response = await instanseSAMURAI.post(`follow/${userId}`)
        return response.data
    },
    async setUnFollow(userId) {
        const response = await instanseSAMURAI.delete(`follow/${userId}`)
        return response.data
    },
    async setUserProfile(userId) {
        const response = await instanseSAMURAI.get(`profile/${userId}`)
        return response.data
    }
} 
export const photosAPI = {
    async getUserPhotos() {
        const response = await instanseCAT.get('search?limit=10')
        return response.data
    }
}
export const vkAPI = {
    async getFriends() {
        const response = await instanseVK.get('count=5&access_token=vk1.a.Bwcp5TJRLKFB4TjpyLX7m7kvnVqleH-cA39TP4hBYpeHYYgfHNHPUNk69eiKG72k9Hoa3sWaUT_bqxIlMI35KXKvos-wtEZtyQ52D8G8_rJBpOKKrnbQ2a4n1jDA55Pphp75zG0Gkn4OSdtrbCQwTyIVlSVftK_xHaFqj7YhnvlZGf2gTllvKZBXIAD7F7Qm&v=5.52')
        return response.data
    }
}


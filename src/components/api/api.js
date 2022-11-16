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

// API'S
export const loginAPI = {
    setIsAuth() {
        return instanseSAMURAI.get('auth/me')
        .then(response => {
            return response.data
        })
    },
    login(email, password) {
        return instanseSAMURAI.post(`auth/login`, {email, password})
        .then(response => {
            // debugger;
            return response.data
        })
    },
    logout() {
        return instanseSAMURAI.delete(`auth/login`)
        .then(response => {
            // debugger;
            return response.data
        })
    },
}

export const postsAPI = {
    setPosts(currentPage) {
        return instanseJSONPLACE.get(`posts?_limit=10&_page=${currentPage}`)
        .then(response => {
            return response.data
        })
    },
    setOnPagePosts(pageNumber) {
        return instanseJSONPLACE.get(`posts?_limit=10&_page=${pageNumber}`)
        .then(response => {
            return response.data
        })
    },
    setParticularPost(id) {
        return instanseJSONPLACE.get(`posts/${id}`)
        .then(response => {
            return response.data
        })
    },
    setComments(id) {
        return instanseJSONPLACE.get(`comments?postId=${id}`)
        .then(response => {
            return response.data
        })
    },
    updateStatus(status) {
        return instanseSAMURAI.put(`profile/status`, {status})
        .then(response => {
            // debugger;
            return response.data
        })
    },
    getStatus(id) {
        return instanseSAMURAI.get(`profile/status/${id}`)
        .then(response => {
            // debugger;
            return response.data
        })
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
    setUsers(pageSize, currentPage) {
        return instanseSAMURAI.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    onPageSetUsers(pageSize, pageNumber) {
        return instanseSAMURAI.get(`users?count=${pageSize}&page=${pageNumber}`)
        .then(response => {
            return response.data
        })
    },
    setFollow(userId) {
        return instanseSAMURAI.post(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    setUnFollow(userId) {
        return instanseSAMURAI.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    setUserProfile(userId) {
        return instanseSAMURAI.get(`profile/${userId}`)
        .then(response => {
            // debugger;
            return response.data
        })
    }
} 
export const photosAPI = {
    getUserPhotos() {
        return instanseCAT.get('search?limit=10')
        .then(response => {
            // debugger
            return response.data
        })
    }
}

export const vkAPI = {
    getFriends() {
        return instanseVK.get('count=5&access_token=vk1.a.Bwcp5TJRLKFB4TjpyLX7m7kvnVqleH-cA39TP4hBYpeHYYgfHNHPUNk69eiKG72k9Hoa3sWaUT_bqxIlMI35KXKvos-wtEZtyQ52D8G8_rJBpOKKrnbQ2a4n1jDA55Pphp75zG0Gkn4OSdtrbCQwTyIVlSVftK_xHaFqj7YhnvlZGf2gTllvKZBXIAD7F7Qm&v=5.52')
        .then(response => {
           return response.data
        })
    }
}


// vk token

// vk1.a.Bwcp5TJRLKFB4TjpyLX7m7kvnVqleH-cA39TP4hBYpeHYYgfHNHPUNk69eiKG72k9Hoa3sWaUT_bqxIlMI35KXKvos-wtEZtyQ52D8G8_rJBpOKKrnbQ2a4n1jDA55Pphp75zG0Gkn4OSdtrbCQwTyIVlSVftK_xHaFqj7YhnvlZGf2gTllvKZBXIAD7F7Qm

// https://oauth.vk.com/blank.html#access_token=vk1.a.Bwcp5TJRLKFB4TjpyLX7m7kvnVqleH-cA39TP4hBYpeHYYgfHNHPUNk69eiKG72k9Hoa3sWaUT_bqxIlMI35KXKvos-wtEZtyQ52D8G8_rJBpOKKrnbQ2a4n1jDA55Pphp75zG0Gkn4OSdtrbCQwTyIVlSVftK_xHaFqj7YhnvlZGf2gTllvKZBXIAD7F7Qm&expires_in=86400&user_id=241946514
// https://oauth.vk.com/authorize?client_id=51474643&display=page&redirect_uri=&scope=friends,messages&response_type=token&v=5.52
import * as axios from 'axios';



const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const usersApi = {
    async getUsers() {
            let response = await instance.get(`users`)
            return response.data
        },
    async getUser(userId){
        let response = await instance.get(`users/${userId}`)
        return response.data
    }
}

export const albumsApi = {
    async getAlbums(userId){
            let response = await instance.get(`albums?userId=${userId}`)
            return response.data
        } ,
        async getAlbum(albumId){
            let response = await instance.get(`albums/${albumId}`)
            return response.data
        }   
}


export const photosApi ={
    async getPhotos(albumId){
            let response = await instance.get(`photos?albumId=${albumId}`)
        return response.data
    }
}
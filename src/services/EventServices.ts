import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default {
    getEvents(perPage:number, page:number) {
        return apiClient.get(`/events?_limit=${perPage}&page=${page}`)
    },
    getEvent(id:number) {
        return apiClient.get(`/events/${id}`)
    }
}
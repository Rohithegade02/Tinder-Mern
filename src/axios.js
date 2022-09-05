import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-server20.herokuapp.com'
})

export default instance
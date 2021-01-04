import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://expatjournal2021.herokuapp.com",
        headers: {
            Authorization: token
        }
    })
}
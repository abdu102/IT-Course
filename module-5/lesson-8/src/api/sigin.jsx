import axios from 'axios';
    import React from 'react'
    let URL = 'https://fakestoreapi.com/'

    export const signin = {
        login: (data) => {
            return axios.post(`${URL}/auth/login`, data)
        } 
    }
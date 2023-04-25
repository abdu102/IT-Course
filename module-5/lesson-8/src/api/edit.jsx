import axios from 'axios'
import React from 'react'
let URL = 'http://localhost:8000'

export const edit = {   
    editPost: (id, data) => {
        return axios.put(`${URL}/posts/${id}`, data)
    }
} 
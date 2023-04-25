import axios from 'axios';
    import React from 'react'
    let URL = 'http://localhost:8000'
export const post =  {
 getAllPost: () => {
    return axios.get(`${URL}/posts`);
 },
 getOnePost: (id) => {
   return axios.get(`${URL}/posts/${id}`)
 },
 addItem: (data) => {
  return axios.post(`${URL}/posts`, data)
 },
 deleteItem: (id) => {
  return axios.delete(`${URL}/posts/${id}`)
 }

}

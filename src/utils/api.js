import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const getPostsAsync = () => axios.get(`${API_ENDPOINT}/posts`);

export const createPostAsync = body =>
  axios.post(`${API_ENDPOINT}/posts`, {
    body,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

export const deletePostAsync = postId =>
  axios.delete(`${API_ENDPOINT}/posts/${postId}`);

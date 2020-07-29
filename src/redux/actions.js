import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
} from "./Constants";
import { getPostsAsync, createPostAsync } from "../utils/api";

// GET METHODS
const getPosts = () => ({
  type: GET_POSTS
});

const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  posts
});

const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE
});

export const fetchPosts = () => {
  return dispatch => {
    dispatch(getPosts());
    getPostsAsync()
      .then(res => dispatch(getPostsSuccess(res.data)))
      .catch(() => dispatch(getPostsFailure()));
  };
};

// CREATE METHODS
const createPost = () => ({
  type: CREATE_POST
});

const createPostSuccess = post => ({
  type: CREATE_POST_SUCCESS,
  post
});

const createPostFailure = () => ({
  type: CREATE_POST_FAILURE
});

export const addPost = (post, successCallBack) => {
  return dispatch => {
    dispatch(createPost());
    createPostAsync(post)
      .then(res => {
        dispatch(createPostSuccess({ ...post, id: res.data.id }));
        successCallBack();
      })
      .catch(() => dispatch(createPostFailure()));
  };
};

// DELETE METHODS
const deletePost = () => ({
  type: DELETE_POST
});

const deletePostSuccess = postId => ({
  type: DELETE_POST_SUCCESS,
  postId
});

const deletePostFailure = () => ({
  type: DELETE_POST_FAILURE
});

export const removePost = postId => {
  return dispatch => {
    dispatch(deletePost());
    getPostsAsync()
      .then(() => dispatch(deletePostSuccess(postId)))
      .catch(() => dispatch(deletePostFailure()));
  };
};

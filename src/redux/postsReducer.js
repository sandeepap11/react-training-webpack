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

const postsReducer = (
  state = {
    posts: [],
    isPostsFetched: false,
    isPostsFetchSuccess: false,
    isPostAddRequested: false,
    isPostAdded: false,
    isPostAddSuccess: false,
    isPostDeleteRequested: false,
    isPostDeleted: false,
    isPostDeleteSuccess: false
  },
  action
) => {
  switch (action.type) {
    // GET CASES
    case GET_POSTS:
      return {
        ...state,
        posts: [],
        isPostsFetched: false,
        isPostsFetchSuccess: false
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        isPostsFetched: true,
        isPostsFetchSuccess: true
      };

    case GET_POSTS_FAILURE:
      return {
        ...state,
        isPostsFetched: true,
        isPostsFetchSuccess: false
      };

    // CREATE CASES
    case CREATE_POST:
      return {
        ...state,
        isPostAddRequested: true,
        isPostAdded: false,
        isPostAddSuccess: false
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.concat(action.post),
        isPostAddRequested: false,
        isPostAdded: true,
        isPostAddSuccess: true
      };

    case CREATE_POST_FAILURE:
      return {
        ...state,
        isPostAddRequested: false,
        isPostAdded: true,
        isPostAddSuccess: false
      };

    // DELETE CASES
    case DELETE_POST:
      return {
        ...state,
        isPostDeleteRequested: true,
        isPostDeleted: false,
        isPostDeleteSuccess: false
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
        isPostDeleteRequested: false,
        isPostDeleted: true,
        isPostDeleteSuccess: true
      };

    case DELETE_POST_FAILURE:
      return {
        ...state,
        isPostDeleteRequested: false,
        isPostDeleted: true,
        isPostDeleteSuccess: false
      };

    default:
      return state;
  }
};

export default postsReducer;

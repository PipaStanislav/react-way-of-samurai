import DISPATCH_CONSTANTS from '../../constants/dispatch-constants'

const addPost = (state) => {
  if (!state.newPostText) {
    return;
  }

  const newPost = {
    id: state.posts.length + 1,
    message: state.newPostText,
    likesCount: 0,
  }

  state.posts.push(newPost);
  state.newPostText = '';

  return state;
};

const updateNewPostText = (state, newText) => {
  state.newPostText = newText;

  return state;
};

const profileReducer = (state, action) => {
  if (action.type === DISPATCH_CONSTANTS.ADD_POST) {
    return addPost(state);
  }

  if (action.type === DISPATCH_CONSTANTS.UPDATE_NEW_POST_TEXT) {
    return updateNewPostText(state, action.newText);
  }

  return state;
}

export default profileReducer;
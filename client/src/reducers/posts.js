import { GETALL, GETONE } from '../constants';
const posts = [];

function postsReducer(state = posts, action) {
  switch (action.type) {
    case GETALL:
      return action.payload;
    default:
      return state;
  }
}

export { postsReducer };

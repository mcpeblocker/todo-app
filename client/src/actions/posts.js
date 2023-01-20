import axios from 'axios';
import { GETALL } from '../constants';

const getAllPosts = async () => {
  const { data } = await axios.get('http://localhost:5000/posts');
  return dispatch => {
    dispatch({
      type: GETALL,
      payload: data,
    });
  };
};

export { getAllPosts };

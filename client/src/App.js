import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Post from './components/Post';
import { getAllPosts } from './actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <Navbar />
      <Input />
      <Post />
    </div>
  );
}

export default App;

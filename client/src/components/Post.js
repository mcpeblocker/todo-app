import React from 'react';
import { useSelector } from 'react-redux';

function Post() {
  const posts = useSelector(state => state.posts);

  return posts.length ? (
    posts.map((p, i) => (
      <div
        key={i}
        className="mt-5 px-5 py-7 max-w-full bg-slate-100 rounded-md flex h-20 align-center justify-between"
      >
        <h3>{p.name}</h3>
        <div className="flex flex-row">
          <button className="px-4 bg-blue-500 rounded-md">Update</button>
          <button className="px-4 bg-red-500 rounded-md">Delete</button>
        </div>
      </div>
    ))
  ) : (
    <h1>There is no post</h1>
  );
}

export default Post;

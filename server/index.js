const express = require('express');
const cors = require('cors');
const { v4 } = require('uuid');
const { posts } = require('./data');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const newPost = {
    id: v4(),
    name: req.body.input,
  };

  posts.push(newPost);
  console.log(posts);
});

app.listen(5000, () => console.log('App has been started'));

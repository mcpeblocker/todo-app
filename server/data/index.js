const { v4 } = require('uuid');

const posts = [
  {
    id: v4(),
    name: 'Test',
  },
];

module.exports = { posts };

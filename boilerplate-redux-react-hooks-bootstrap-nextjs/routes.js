const routes = require('next-routes');

module.exports = routes()
  .add('/', 'home')
  .add('/page', 'page');
// .add('/users/:user', 'detail');

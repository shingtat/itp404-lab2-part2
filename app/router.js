import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', {path: '/users/:id'});
  this.route('user-list', {path: '/users'});
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todo-list', { path: '/' }, function () {
    // additional child routes will go here later
  });
});

export default Router;

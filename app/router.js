import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todo-list', { path: '/' }, function () {
    this.route('active');
  });
});

export default Router;

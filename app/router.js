import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('news', {path:'/news'}, function() {
    this.route('newsDesc',{path:'/:article_id'});
  });
  this.route('student', function() {
    this.route('performance',{path:'/:student_id'});
  });
  this.route('customer-service');
  this.route('customer-form');
  this.route('user-help-service');
});

export default Router;

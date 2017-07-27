import Ember from 'ember';

export default Ember.Route.extend({
	model()
	{
		return this.get('store').findAll('article');
	},
	  actions: {
    sendData(selectedArticleID) {
      alert("Data sent to route--"+selectedArticleID);
      this.transitionTo('news.newsDesc',selectedArticleID);
    }
  }
});

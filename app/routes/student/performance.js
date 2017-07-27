import Ember from 'ember';

export default Ember.Route.extend({
	model(params)
	{
		alert("perfo model called");
		return this.get('store').findRecord('student', params.student_id);
	}
});

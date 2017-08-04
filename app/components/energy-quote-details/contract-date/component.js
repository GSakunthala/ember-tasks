import Ember from 'ember';

export default Ember.Component.extend({
	actions:
{
	checkDone()
	{
		//let methodName = this.get('action');
		this.sendAction();
	}
}
});

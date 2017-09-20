import Ember from 'ember';

	export default Ember.Component.extend({
		
			sectionId:Ember.computed('section.name',function(){ return `#${this.get('section.name')}`}),
			actions:
{
	checkDone()
	{
		alert(this.get('sectionId'));
		//let methodName = this.get('action');
		this.sendAction();
	}
}
});


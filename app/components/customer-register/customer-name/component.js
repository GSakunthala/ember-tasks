import Ember from 'ember';

export default Ember.Component.extend({
	value:'',
	focusOut()
	{
		this.sendAction('onInputFocusOut',this.value);
	},
	focusIn()
	{
		this.sendAction('onkeyPress');
	}
});

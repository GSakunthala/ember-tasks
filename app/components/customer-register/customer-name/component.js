import Ember from 'ember';
import Validations from './validate';
export default Ember.Component.extend(Validations,{
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

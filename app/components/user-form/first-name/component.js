import Ember from 'ember';
import {
  ContactDetailsValidations
} from './validator';

export default Ember.Component.extend(ContactDetailsValidations,{

	userObj:'',
	actions:
	{
		onCallMeBack()
		{
			alert("1");
			let userDetails = 
			{
				'firstName' : this.get('firstName'),	
				'surname' : this.get('surname')	,
				'email' : this.get('email'),
				'phone' : this.get('phone')	} 

			this.sendAction('onSubmit',userDetails);
		}
	}
});

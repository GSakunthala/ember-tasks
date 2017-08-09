import Ember from 'ember';
import {
  UserValidations
} from './validator';

export default Ember.Component.extend(UserValidations,{

	userObj:'',
	actions:
	{
		onCallMeBack()
		{
			let userDetails = 
			{
				'FirstName' : this.get('firstName'),	
				'LastName' : this.get('surname')	,
				'Email' : this.get('email'),
				'Phone' : this.get('phone')	} 

			this.sendAction('onSubmit',userDetails);
		}
	}
});

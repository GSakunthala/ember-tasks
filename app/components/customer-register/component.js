import Ember from 'ember';
import moment from 'moment';


export default Ember.Component.extend({
	moment : Ember.inject.service(),
	type:'text',
	value :'',
	placeholder:'Enter cognizant mail',
	maxlength : 10,
	autoComplete:'on',
	isValid:true,
	valuePath: 'firstName',
	labelId:'name',
	labelTxt:'Enter name',
	errorMsg:'',
	init()
	{
		this._super(...arguments);
		//this.$.noConflict();
	},
	focusOut() {
		this._super(...arguments);
		//alert(this.value);
		},
	checkValidHours()
	{
		let today = moment();
		console.log(today);
		
				//console.log(moment.tz.names());
				//let us = moment.locale('en');
				let us = moment.tz("August 5, 2017 11:13:00", "Europe/London");
								//console.log("uk" + us.format());

				//console.log("parsing" + Date.parse(us));
				console.log("us timings--" + us);
				console.log("us day--" + us.day());

				console.log("us hours--" + us.get('hour'));
				let day = us.day();
				console.log("Day" + day);
				let hour = us.hour();
				console.log("Hour" + hour);
				if(day == 0 || day == 6 || (day == 5 && hour==17.30))
				{
					this.set('errorMsg',` Sorry there's no one available right now. Please leave your details below and we'll call you after 8:30am on Monday`);
				}
				else
				{
					this.set('errorMsg','No error');
				}








	},
	actions:
	{
		inputFocusIn(val)
		{
			console.log("focussed");
					console.log("value---------->"+val);

		},
		inputKeyPress(event)
		{
			console.log("typed")
		},
		onComplete()
		{
			this.checkValidHours();
			 this.$("#errorMsg").fadeOut("slow");
			     $('[data-toggle="popover"]').popover(); 


		}


}
});

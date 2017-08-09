import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
	userDetails :'',
	isValidForm : false,

section:
    Ember.Object.create({
      name: 'fuel',
      component: 'user-form/first-name',
      changeStep: 'changeStep',
      update: 'updateFuel',
      description: 'What would you like a quote for?',
      canEdit: true,
      valueUpdated: false,
      isEditInProgress: false,
      select: 1,
      isInvalidForm:true
    }),
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
				let message = `Sorry there's no one available right now. Please leave your details below and we'll call you`;
				
				if(day == 0 || day == 6 || (day == 5 && hour>17)) //weekend
				{
						this.set('displayMsg',message + `after 8:30am on Monday`);
				}
				else if(hour>17)
				{				
					this.set('displayMsg',`${message}after 8:30am tomorrow`);

				}
				else if(hour >= 8.30 && hour<17) //weekdays
				{
				this.set('displayMsg',`${message} within the next 15 minutes`);

				}
				else if(hour>=0 && hour<8.30) //monday mrg
				{
				this.set('displayMsg',`${message} after 8:30am today`);

				}
			
				else
				{
					this.set('displayMsg',`We'll call back.`);
				}








	},
    actions: {
    changeStep: function (value) {
    },
    onCallMeBack:function(user)
    {
    	    	alert('call me back');
    	this.setProperties(
    		{
    			'userDetails':user,
    			'isValidForm':true
    		}
    		);
		this.checkValidHours();
    	console.log(userDetails);

}
}


});

import Ember from 'ember';

export default Ember.Component.extend({
	
	/*	click : function()
		{
			alert('clciked');
			this.sendAction("showDesc");
		}*/
		 actions: {
    sendDataToController(eachNewsId) {
      this.sendAction('sendData',eachNewsId);
    }
}

});

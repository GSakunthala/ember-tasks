import Ember from 'ember';

export default Ember.Component.extend({
	

		 actions: {
    sendDataToController(eachNewsId) {
      this.sendAction('sendData',eachNewsId);
    }
}

});

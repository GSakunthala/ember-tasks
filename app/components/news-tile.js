import Ember from 'ember';

export default Ember.Component.extend({
	
/*fdfdf*/
		 actions: {
    sendDataToController(eachNewsId) {
      this.sendAction('sendData',eachNewsId);
    }
}

});

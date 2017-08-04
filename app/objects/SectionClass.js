import Ember from 'ember';

export default Ember.Object.extend({
	 name: '',
      component: '',
      changeStep: 'changeStep',
      update: '',
      description: '',
      canEdit: true,
      valueUpdated: false,
      isEditInProgress: false,
      select: false

});
import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
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
    actions: {
    changeStep: function (value) {
    },
    onCallMeBack:function()
    {
    	alert('call me back');
    }
}


});

import Ember from 'ember';
import SectionClass from '../../objects/SectionClass';

export default Ember.Component.extend({
currentSectionIndex:'',
successMsg:'',
noOfSteps : 3,
sections:[SectionClass.create({
      name: 'fuel',
      component: 'energy-quote-details/select-fuel-type',
      changeStep: 'changeStep',
      update: 'updateFuel',
      description: 'What would you like a quote for?',
      canEdit: true,
      valueUpdated: false,
      isEditInProgress: false,
      select: true
    }),
    SectionClass.create({
      name: 'businessSites',
      component: 'energy-quote-details/site',
      changeStep: 'changeStep',
      update: 'updateSite',
      description: 'Your business & usage details',
      canEdit: false,
      valueUpdated: false,
      isEditInProgress: false,
      select: true
    }),
     SectionClass.create({
      name: 'businessSites2',
      component: 'energy-quote-details/site',
      changeStep: 'changeStep',
      update: 'updateSite',
      description: 'Your business & usage details2',
      canEdit: false,
      valueUpdated: false,
      isEditInProgress: false,
      select: true
    }),
   SectionClass.create({
      name: 'contract',
      component: 'energy-quote-details/contract-date',
      changeStep: 'changeStep',
      update: 'updateContractDate',
      description: 'Contract Start Date',
      canEdit: false,
      valueUpdated: false,
      isEditInProgress: false,
      select: true
    })],
    init()
    {
    //  alert("init");
      
      this._super(...arguments);
      this.currentSectionIndex = 0;
      Ember.$('[data-toggle="tooltip"]').tooltip(); 
    },
    didRender()
    {
            this._super(...arguments);
           // alert("did render");
    },
    actions:
    {
    	dontEditComponent()
    	{

    	},
    	toggleEdit()
    	{

    	},
    	onEventTagging()
    	{

    	},
    	onErrorTagging()
    	{

    	},
    	changeStep(value)
    	{
         if(this.currentSectionIndex < this.noOfSteps)
        {
          this.nextSectionIndex=this.currentSectionIndex+1;
      		console.log("changeStep");
      	//	alert("changeStep");
          this.sections[this.currentSectionIndex].setProperties(
            {
              select : false,
              valueUpdated : true
            });
          console.log(this.sections[this.currentSectionIndex]);
         
         
          this.currentSectionIndex+=1;
           /*this.sections[this.nextSectionIndex].setProperties(
            {
              select : true
            });*/
        this.sections[this.nextSectionIndex].toggleProperty('select');
      }
        else
        {
             this.setProperties({ successMsg: "We r done"}) ;
        }
    	}

    }

});

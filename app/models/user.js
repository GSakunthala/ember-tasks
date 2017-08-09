import DS from 'ember-data';
import Validations from '../components/customer-register/customer-name/validate'

export default DS.Model.extend(Validations,{
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
   email: DS.attr('string'),
phone :DS.attr()
});

import DS from 'ember-data';
import Validations from '../components/customer-register/customer-name/validate'

export default DS.Model.extend(Validations,{
 email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});

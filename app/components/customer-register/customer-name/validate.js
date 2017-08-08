import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  firstName:
  { 
validators: [
   validator('presence', {
        presence: true,
        message: 'This field can\'t be left blank'
      }),
      validator('format', {
        regex: /^[0-9]{4}$/,
        message: 'Please enter a four digit number'
      })
  ]
}
});
export default Validations;

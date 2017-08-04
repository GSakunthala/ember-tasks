import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('customer-register/customer-name', 'Integration | Component | customer register/customer name', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{customer-register/customer-name}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#customer-register/customer-name}}
      template block text
    {{/customer-register/customer-name}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

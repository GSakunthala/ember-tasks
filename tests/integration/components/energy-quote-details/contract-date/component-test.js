import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('energy-quote-details/contract-date', 'Integration | Component | energy quote details/contract date', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{energy-quote-details/contract-date}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#energy-quote-details/contract-date}}
      template block text
    {{/energy-quote-details/contract-date}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import Ember from 'ember';

export function safeString(value) {
  return Ember.String.htmlSafe(value)
}

export default Ember.Helper.helper(safeString);
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-todo', 'Integration | Component | edit todo', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{edit-todo}}`);
  assert.equal(this.$().text().trim(), '');
});

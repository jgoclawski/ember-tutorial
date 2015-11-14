import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-item', 'Integration | Component | todo item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{todo-item}}`);
  assert.equal(this.$().text().trim(), '');
});

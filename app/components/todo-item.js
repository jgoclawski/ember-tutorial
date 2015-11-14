import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['todo.isCompleted:completed', 'isEditing:editing'],

  isEditing: false,

  actions: {
    complete(value) {
      var model = this.get('todo');
      model.set('isCompleted', value);
      model.save();
    },
    edit() {
      this.set('isEditing', true);
    },
    acceptChanges() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('todo.title'))) {
        this.send('removeTodo');
      } else {
        this.get('todo').save();
      }
    },
    removeTodo() {
      var todo = this.get('todo');
      todo.deleteRecord();
      todo.save();
    }
  }
});

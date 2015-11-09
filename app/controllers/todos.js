import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  },
  remaining: Ember.computed('model.@each.isCompleted', function() {
    var todos = this.get('model');
    return todos.filterBy('isCompleted', false).get('length');
  }),
  inflection: Ember.computed('remaining', function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'todo' : 'todos';
  })
});

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
    },
    clearCompleted() {
      let completed = this.get('model').filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    },
    completeAll(value) {
      let todos = this.get('model');
      todos.setEach('isCompleted', value);
      todos.invoke('save');
    }
  },
  remaining: Ember.computed('model.@each.isCompleted', function() {
    var todos = this.get('model');
    return todos.filterBy('isCompleted', false).get('length');
  }),
  inflection: Ember.computed('remaining', function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'todo' : 'todos';
  }),
  hasCompleted: Ember.computed('completed', function() {
    return this.get('completed') > 0;
  }),
  completed: Ember.computed('model.@each.isCompleted', function() {
    return this.get('model').filterBy('isCompleted', true).get('length');
  }),
  allAreDone: Ember.computed('model.@each.isCompleted', function() {
    return this.get('model').get('length') > 0 && this.get('model').isEvery('isCompleted');
  })
});

import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,

  actions: {
    complete(value) {
      var model = this.get('todo');
      model.set('isCompleted', value);
      model.save();
    },
    edit() {
      this.set('isEditing', true);
    }
  }
});

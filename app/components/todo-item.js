import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    complete(value) {
      var model = this.get('todo');
      model.set('isCompleted', value);
      model.save();
    }
  }
});

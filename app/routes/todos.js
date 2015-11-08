import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('todo');
        //return [
        //    {
        //      id: 1,
        //      title: 'Learn Ember.js',
        //      isCompleted: true
        //    },
        //    {
        //      id: 2,
        //      title: '...',
        //      isCompleted: false
        //    },
        //    {
        //      id: 3,
        //      title: 'Profit!',
        //      isCompleted: false
        //    }
        //];
    }
});

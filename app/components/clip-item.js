import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteClip: function() {
      this.store.destroyRecord();
      // this.destroyRecord();
    },
    starClip: function() {
      this.get('star');
      this.save()
    }
  }
});

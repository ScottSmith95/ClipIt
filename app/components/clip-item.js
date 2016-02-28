import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteClip: function() {
      this.get('clip').deleteRecord();
      this.get('isDeleted');
      this.get('clip').save();
    },
    starClip: function() {
      console.log("starClip");
      this.set('star', false);
      this.get('clip').save();
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({

  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    createClip: function() {
      var newClip = this.store.createRecord('clip', {
        title: this.get('title'),
        url: this.get('url'),
        timestamp: new Date().getTime()
      });
      newClip.save();
    }
    ,
    deleteClip: function(id) {
      store.findRecord('clip', id).then(function(clip) {
        clip.destroyRecord(); // => DELETE to /posts/2
      });
      // this.store.findRecord('clip', id).destroyRecord();
    }
  }

});

import Ember from 'ember';

export default Ember.Component.extend({

  // sortProperties: ['timestamp'],
  // sortAscending: false, // sorts post by timestamp
  actions: {
    createClip: function(model) {
      this.sendAction('createClip', model);

      // Clear each input field
      this.set('newClip.title', null);
      this.set('newClip.url', null);
      // this.sendAction('createClip', model);
      // var newClip = this.store.createRecord('clip', {
      //   title: this.get('title'),
      //   url: this.get('url'),
      //   timestamp: new Date().getTime()
      // });
      // newClip.save();
    }
  }

});

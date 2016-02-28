import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createClip: function(model) {
      this.sendAction('createClip', model);

      // Clear each input field
      this.set('newClip.title', null);
      this.set('newClip.url', null);
    }
  }

});

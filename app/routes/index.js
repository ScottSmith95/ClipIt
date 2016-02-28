import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('clip');
    },

    actions: {
      createClip: function (model) {
        let clip = this.store.createRecord('clip', {
          title: model.title,
          url: model.url,
          star: false,
          timestamp: new Date()
        });
        clip.save();
      }
    }
});

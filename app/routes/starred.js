import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.query('clip', {
          star: true
        });
    },

    renderTemplate() {
      this.render('index'); // Render into the index template
    }
});

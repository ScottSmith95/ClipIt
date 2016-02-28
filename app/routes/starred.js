import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // return this.store.query('clip', {
        //   star: true
        // });
        return this.store.filter('clip', function(clip){
          console.log(clip.star);
          return clip.get('star');
        });
    },

    renderTemplate() {
      this.render('index'); // Render into the index template
    }
});

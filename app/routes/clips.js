import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // let clips = [
        //     {
        //         title: "Learn Ember",
        //         url: "http://emberjs.com",
        //         star: true,
        //     },
        //     {
        //         title: "Facebook Link",
        //         url: "http://facebook.com",
        //         complete: false,
        //     }
        // ];
        // return clips;
        return this.store.findAll('clip');
    }
});

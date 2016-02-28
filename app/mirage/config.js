export default function() {
  this.get('/clips', function() {
    return {
      data: [{
              id: "1",
              type: "clip",
              title: "Learn Ember",
              url: "http://emberjs.com",
              star: true,
          },
          {
              id: "2",
              type: "clip",
              title: "Facebook Link",
              url: "http://facebook.com",
              star: false,
      }]
    };
  });
}

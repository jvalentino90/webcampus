if (Meteor.isClient) {
  Template.body.helpers({
    subjects: function () {
      return Subjects.find();
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Seed.subjects()
    // code to run on server at startup
  })
}

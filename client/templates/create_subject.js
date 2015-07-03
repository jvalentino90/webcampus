Template.create_subject.events({
  'click #boton': function (event, template) {
    var text = template.$('#subject').val();
    Subjects.insert({
      name: text
    });

    template.$('#subject').val('') 

    // Prevent default form submit
    return false;
  }
});
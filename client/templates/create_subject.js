Template.create_subject.events({
  'click button': function (event, template) {
    var text = event.target.subject.value;
    Subjects.insert({
      name: text
    });

    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});
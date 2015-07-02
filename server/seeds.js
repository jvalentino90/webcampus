
Seed = { subjects: function() { 
	if(Subjects.find().count() <1){
		Subjects.insert({ name: "Matematica"})
		Subjects.insert({ name: "Fisica"})
 		Subjects.insert({ name: "Lengua"})
 	}
  }
}


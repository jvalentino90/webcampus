should()
T.suite(function() {

  describe('Subject seeding', function() {

    context('there isn\'t any subjects in the DB', function() {

      beforeEach(function() {
        Seed.subjects()
      })


      it('should create new subjects', function() {
        Subjects.find().count().should.be.gt(0)
      })
                    
    })

    context('there are already existing subjects in the DB', function() {

      beforeEach(function() {
        Subjects.insert({})
        Seed.subjects()
      })

      it('should not create new subjects', function() {
        Subjects.find().count().should.eq(1) // the subject created before running the seed
      })
    })
  })
})

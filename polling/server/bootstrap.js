Meteor.startup(function() {

  // if there are no polls available
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        question: 'Veebiraamistiku aine on lahe?',
        choices: [
          { text: 'Muidugi!', votes: 0 },
          { text: 'Eh', votes: 0 },
          { text: 'Ei, liiga palju peab vaeva nägema.', votes: 0 }
        ]
      },
      {
        question: 'Test küsimus?',
        choices: [
          { text: 'test1 ', votes: 0 },
          { text: 'test2 ', votes: 0 },
          { text: 'test3 ', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });
  }

});
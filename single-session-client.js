
SingleSession = {
  MySessions: new Mongo.Collection('presence.mySessions')
};

SingleSession.isSingleSession = emboxValue(function(){
  var currentLoginTokens = {};
  SingleSession.MySessions.find({
    userId: Meteor.userId()
  }, {
    fields: {
      loginToken: true
    }
  }).forEach(function(session){
    currentLoginTokens[session.loginToken] = true;
  });
  return _.keys(currentLoginTokens).length <= 1;
});

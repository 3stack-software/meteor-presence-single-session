"use strict";

Meteor.publish(null, function(){
  var self = this,
    sessionKey = this.connection.sessionKey,
    cursor,
    observeHandle,
    collection = 'presence.mySessions';
  if (self.userId == null){
    self.ready();
    return;
  }

  cursor = presences.find({
    userId: this.userId
  }, {
    fields: {
      userId: true,
      connectedAt: true,
      clientAddress: true,
      state: true,
      loginToken: true
    }
  });


  // Manually publish to a different collection name
  observeHandle = cursor.observeChanges({
    added: function (id, fields) {
      if (id === sessionKey){
        fields.currentSession = true;
      }
      self.added(collection, id, fields);
    },
    changed: function (id, fields) {
      self.changed(collection, id, fields);
    },
    removed: function (id) {
      self.removed(collection, id);
    }
  });

  self.onStop(function () {observeHandle.stop();});
  self.ready();
});

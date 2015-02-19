presence-single-session
======================================

Publishes all presence-entries with the current `userId` to `SingleSession.MySessions` (Mongo Collection).


Provides reactive function `SingleSession.isSingleSession()` which returns `false` if the current user
 has multiple sessions with different `loginToken`'s. (eg. Different browser or computer)

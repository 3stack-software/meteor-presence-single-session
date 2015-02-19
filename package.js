Package.describe({
  version: "0.1.0",
  summary: "A package to detect simultatenous sessions of the same user account"
});
Package.describe({
  name: '3stack:presence-single-session',
  version: '0.1.0',
  summary: 'A package to detect simultatenous sessions of the same user account',
  git: 'https://github.com/3stack-software/meteor-presence-single-session',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.use([
    'underscore',
    'mongo',
    'ddp',
    'accounts-base',
    '3stack:presence@1.03',
    '3stack:embox-value@0.1.0'
  ]);

  api.export('SingleSession', 'client');

  api.addFiles([
    'single-session-server.js'
  ], 'server');

  api.addFiles([
    'single-session-client.js'
  ], 'client');
});

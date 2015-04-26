Package.describe({
  name: 'keryi:meteor-braintree-payment',
  version: '1.1.0',
  summary: 'Meteor package for Braintree Payment',
  git: 'https://github.com/keryi/meteor-braintree-payment.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.addFiles('lib/braintree-web/dist/braintree.js', 'client');
  api.addFiles('lib/braintree-server/braintree.js', 'server');
  api.export('braintree', 'server');
});

Npm.depends({
  braintree: '1.23.0'
});

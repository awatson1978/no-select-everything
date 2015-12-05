Package.describe({
  name: 'photonic:no-select-everything',
  version: '0.2.0',
  // Brief, one-line summary of the package.
  summary: 'photonic:no-select-everything',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/awatson1978/no-select-everything',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.addFiles('no-select-everything.less');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('photonic:no-select-everything');
  api.addFiles('no-select-everything-tests.js');
});

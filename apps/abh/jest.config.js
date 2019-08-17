module.exports = {
  name: 'abh',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/abh',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

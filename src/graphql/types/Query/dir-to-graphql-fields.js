const dirToObject = require('dir-to-object'); // eslint-disable-line import/no-extraneous-dependencies

const isGraphQLField = data =>
  !Object.keys(data).some(
    key =>
      ![
        'args',
        'astNode',
        'deprecationReason',
        'description',
        'resolve',
        'subscribe',
        'type'
      ].includes(key)
  );

const dirToGraphQLFields = dirPath =>
  dirToObject({
    canAdd: isGraphQLField,
    dirPath
  });

module.exports = dirToGraphQLFields;

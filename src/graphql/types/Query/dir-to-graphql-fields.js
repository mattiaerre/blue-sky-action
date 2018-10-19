const dirToObject = require('dir-to-object');

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
  dirToObject(dirPath, {
    canAdd: isGraphQLField
  });

module.exports = dirToGraphQLFields;

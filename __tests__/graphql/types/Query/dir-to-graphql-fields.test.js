const { join } = require('path');
const dirToGraphQLFields = require('../../../../src/graphql/types/Query/dir-to-graphql-fields.js');

describe('dirToGraphQLFields', () => {
  it('to match snapshot', () => {
    const dirPath = join(
      __dirname,
      '../../../../src/graphql/types/Query/fields'
    );
    expect(dirToGraphQLFields(dirPath)).toMatchSnapshot();
  });
});

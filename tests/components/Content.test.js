import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../../src/components/Content';

describe('Content', () => {
  test.skip('should render correctly', () => {
    const tree = renderer.create(<Content workshop="true" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

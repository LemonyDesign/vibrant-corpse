import React from 'react';
import renderer from 'react-test-renderer';
import Masthead from '../../src/components/Masthead';

describe('Masthead', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Masthead />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

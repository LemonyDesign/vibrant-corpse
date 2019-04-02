import React from 'react';
import renderer from 'react-test-renderer';
import Tooltip from '../../src/components/Tooltip';

describe('Tooltip', () => {
  test('should render correctly', () => {
    const mockModifier = {
      modWord: 'green',
      modDefinition: 'this is an adjective',
    };
    const mockBase = {
      baseWord: 'dog',
      baseDefinition: 'this is a noun',
    };

    const tree = renderer.create(<Tooltip modifier={mockModifier} baseword={mockBase} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

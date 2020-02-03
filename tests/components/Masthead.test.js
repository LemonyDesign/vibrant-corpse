import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Masthead from '../../src/components/Masthead';

describe('Masthead', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Masthead />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

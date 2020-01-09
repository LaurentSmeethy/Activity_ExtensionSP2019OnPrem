import React from 'react';
import renderer from 'react-test-renderer';

import test from '..\src\component\test.js';

describe('<test />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<test />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
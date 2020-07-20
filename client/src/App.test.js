import React from 'react';
import TestRenderer from 'react-test-renderer';

import App from './App';

test('should render fine', () => {
  const testRenderer  = TestRenderer.create(<App classes={{game: 'gameclass'}} />);
  const testInstance = testRenderer.root;

  expect(testInstance.props.classes.game).toBe('gameclass');
});

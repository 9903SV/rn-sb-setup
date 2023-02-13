import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';

const props = {};

storiesOf('App', module).add('Primary', () => (
  <Text style={{ color: 'red' }}>react native storybook</Text>
));

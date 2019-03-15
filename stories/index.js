import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('with text', () => (
    <button>Hello button</button>
  ))
  .add('with emoji', () => (
    <button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
  ));
import React from 'react';

import { storiesOf } from '@storybook/react';
import { First, Second } from './main'
import BasicToggler from './basic_main'

storiesOf('RenderPropsProj', module)
  .add('Main', () => (
    <div>
      <First />
      <Second />
    </div>
    )
  )
  .add('Basic', () => (
    <div>
      <BasicToggler />
    </div>
    )
  )

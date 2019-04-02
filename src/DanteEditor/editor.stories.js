import React from 'react'
import { storiesOf } from '@storybook/react'

import {Editor} from './editor'

storiesOf('Dante Editor', module)
  .add('Editor', () => <Editor />);

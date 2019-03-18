import React from 'react'
import { storiesOf } from '@storybook/react'

import Editor from './editor'

storiesOf('Slate Editor', module)
  .add('Editor', () => <Editor />);

import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../src/components', true, /.*story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story, context) => withInfo()(story)(context));

configure(loadStories, module);

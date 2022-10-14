import { addDecorator } from '@storybook/react'
import React from 'react'
import Center from '../src/Components/Center/Center'
import {withConsole} from "@storybook/addon-console";
import {withA11y} from '@storybook/addon-a11y';

addDecorator(story => <Center>{story()}</Center>)
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withA11y);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}


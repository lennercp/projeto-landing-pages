import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { theme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/global-styles';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'não sei',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => {
  return <Heading {...args} />;
};
export const Dark = (args) => {
  return <Heading {...args} />;
};

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'o texto está claro',
  colorDark: false,
};

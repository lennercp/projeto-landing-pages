import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    children: 'example',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return(
    < div >
      < Menu { ...args } />
    </div >
  );
};


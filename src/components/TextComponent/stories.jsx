import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda nam maxime
    deserunt ratione soluta nesciunt unde animi qui? Officia distinctio veniam vel repellendus
    voluptate, nisi nam nesciunt ratione culpa.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <TextComponent {...args} />;
};

import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo Link',
    srcImage: 'assets/images/logo.svg',
    link: 'https://google.com',
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImage: '',
};

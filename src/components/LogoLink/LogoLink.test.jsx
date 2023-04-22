import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImage="image.jpg" />,
    );
    const image = screen.getByRole('img', { name: 'Olá mundo' });
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink></LogoLink>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

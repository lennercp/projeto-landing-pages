import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should match snapshot', () => {
    renderTheme(<Footer html={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer html={'<h1>Olá</h1>'} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

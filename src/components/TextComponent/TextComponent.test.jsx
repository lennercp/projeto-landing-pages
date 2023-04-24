import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render with children text', () => {
    renderTheme(<TextComponent>O texto</TextComponent>);
    const p = screen.queryByText('O texto');
    expect(p).toBeInTheDocument();
  });

  it('should render with font-size correct', () => {
    renderTheme(<TextComponent>O texto</TextComponent>);
    const p = screen.getByText('O texto');
    expect(p).toHaveStyle({ 'font-size': theme.font.sizes.medium });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>O texto</TextComponent>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        O texto
      </div>
    `);
  });
});

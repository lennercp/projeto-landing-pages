import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { NavLinks } from '.';

import mock from './mock';

describe('<NavLinks />', () => {
  it('should render', () => {
    renderTheme(<NavLinks links={mock} />);

    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);

    expect(screen.queryAllByText(/text/i)).toHaveLength(0);
  });

  it('should center links when media less than 768px', () => {
    renderTheme(<NavLinks links={mock} />);

    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

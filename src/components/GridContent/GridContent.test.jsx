import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { GridContent } from '.';

import mock from './mock';

describe('<GridContent />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridContent {...mock} />);

    expect(container).toMatchSnapshot();
  });

  it('should render grid content', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});

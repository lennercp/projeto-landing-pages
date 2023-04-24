import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { GridImage } from '.';
import mock from './mock';
describe('<GridImage />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridImage {...mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

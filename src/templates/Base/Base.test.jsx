import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { Base } from '.';
import { mockBase } from './mock';

describe('<Base />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Base {...mockBase} />);

    expect(container).toMatchSnapshot();
  });
});

import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  renderTheme(<Home />);
});

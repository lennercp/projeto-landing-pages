import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background>Children</SectionBackground>,
    );

    expect(screen.getByText(/children/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground light>Children</SectionBackground>,
    );

    expect(screen.getByText(/children/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

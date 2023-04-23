import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <SectionContainer background>Children</SectionContainer>,
    );

    expect(screen.getByText(/children/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

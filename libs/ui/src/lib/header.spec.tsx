
import { render } from '@testing-library/react';
import { Header } from './header';

describe('Header component', () => {
  it('should render', () => {
    const { getByTestId } = render(<Header>Hello</Header>);

    expect(getByTestId('header').innerHTML).toMatch(/Hello/)
  });

});

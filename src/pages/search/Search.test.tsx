import { render } from "@testing-library/react";
import Search from "./Search";

describe('SearchPage', () => {
  it('should render', () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });
});

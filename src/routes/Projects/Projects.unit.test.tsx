import React from "react";
import { shallow } from "enzyme";

import Projects from "./Projects";

const defaultProps = {
  classes: {
    root: "",
    cardsContainer: "",
  }
};

describe("The Projects instance", () => {
  beforeEach(() => jest.clearAllMocks());

  describe("When rendered with default props", () => {
    it("Should render without throwing any errors", () => {
      const component = shallow(<Projects {...defaultProps} />);

      console.error = jest.fn();

      expect(component).toMatchSnapshot();
      expect(console.error).not.toHaveBeenCalled();
    });
  });
});

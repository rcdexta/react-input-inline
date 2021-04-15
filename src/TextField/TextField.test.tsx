// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TextField from "./TextField";
import { TextFieldProps } from "./TextField.types";

describe("Test Component", () => {
  let props: TextFieldProps;

  beforeEach(() => {
    props = {
      content: "inline editable content"
    };
  });

  const renderComponent = () => render(<TextField {...props} />);

  it("should render foo text correctly", () => {    
    const { container } = renderComponent();

    expect(container.firstChild).toHaveTextContent(props.content);
  });
});

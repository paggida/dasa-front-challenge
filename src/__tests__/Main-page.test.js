import React from 'react';
import Main from '../pages/Main';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"


it("Should render the homepage", () => {
  const page = mount(<Main />);
  expect(toJson(page)).toMatchSnapshot();
  page.unmount();
});

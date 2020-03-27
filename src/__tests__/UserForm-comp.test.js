import React from 'react';
import UserForm from '../components/UserForm';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"

it("Should render the user form", () => {
  const props = {
    handleOutput: ()=>{}
  };
  const comp = mount(<UserForm {...props} />);

  expect(toJson(comp)).toMatchSnapshot();
  comp.unmount();
});

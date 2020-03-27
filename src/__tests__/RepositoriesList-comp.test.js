import React from 'react';
import RepositoriesList from '../components/RepositoriesList';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"


it("Should render the repositories list for an empty repository group", () => {
  const props = {
    repositories: []
  };
  const comp = mount(<RepositoriesList {...props} />);
  expect(toJson(comp)).toMatchSnapshot();
  comp.unmount();
});

it("Should render the list of repositories for a populated repository group", () => {
  const props = {
    repositories: [
      { id: 1,
        name: "Repo01",
        stargazers_count: 11,
        owner: {
          login:"Tester01",
          avatar_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
        }
      },
      { id: 2,
        name: "Repo02",
        stargazers_count: 12,
        owner: {
          login:"Tester02",
          avatar_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
        }
      },
    ]
  };
  const comp = mount(<RepositoriesList {...props} />);
  expect(toJson(comp)).toMatchSnapshot();
  comp.unmount();
});

import Dashboard from "../components/Dashboard/Dashboard";
import Panel from "../components/Dashboard/Panel";
import renderer from "react-test-renderer";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {mount, shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "../store";
import {Provider} from "react-redux";

configure({adapter: new Adapter()});

describe("Test Dashboard page", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => {
        return {matches: true};
      }),
    });
  });
  test("site renders correctly", () => {
    const component = renderer.create(
      <Router>
        <Provider store={configureStore()}>
          <Dashboard />
        </Provider>
      </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  // panel test
  test("Component renders correctly", () => {
    const component = renderer.create(
      <Router>
        <Provider store={configureStore()}>
          <Panel />
        </Provider>
      </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("unmount function works", () => {
    const wrapper = shallow(
      <Router>
        <Provider store={configureStore()}>
          <Panel />
        </Provider>
      </Router>,
    );
    console.log(wrapper.debug());
    const component = wrapper.find("Connect(Panel)").dive();
    const onUnmountSpy = jest.spyOn(
      component.instance(),
      "componentWillUnmount",
    );

    component.instance().componentWillUnmount();
    expect(onUnmountSpy).toHaveBeenCalled();
  });
});

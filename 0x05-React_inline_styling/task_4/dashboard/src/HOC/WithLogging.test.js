import { shallow, mount } from "enzyme";
import React from "react";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
    afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test WithLoggin Component", () => {
    it("console.log on mount and on unmount with Component", () => {
        console.log = jest.fn();
        const HOC = WithLogging(() => <p />);
        const wrapper = mount(<HOC />);
        expect(wrapper.exists()).toBeTruthy();
        expect(console.log).toHaveBeenNthCalledWith(1, 'Component Component is mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenNthCalledWith(2, 'Component Component is going to unmount');
        jest.restoreAllMocks();
    });
    it("console.log on mount and on unmount with element Login", () => {
        console.log = jest.fn();
        const HOC = WithLogging(Login);
        const wrapper = mount(<HOC />);
        expect(wrapper.exists()).toBeTruthy();
        expect(console.log).toHaveBeenNthCalledWith(1, 'Component Login is mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenNthCalledWith(2, 'Component Login is going to unmount');
        jest.restoreAllMocks();
    });
})
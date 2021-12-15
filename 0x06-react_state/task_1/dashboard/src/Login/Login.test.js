import Login from './Login';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
    afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test Login Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<Login />);
        expect(myComp.exists()).toBeTruthy();
    });
    // it("Renders 2 input Tags", () => {
    //     const myComp = shallow(<Login />);
    //     expect(myComp.find('.Login input')).toHaveLength(2);
    // });
    // it("Renders 2 label Tags", () => {
    //     const myComp = shallow(<Login />);
    //     expect(myComp.find('.Login label')).toHaveLength(2);
    // });
    it("Verify that the submit button is disabled by default", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').at(2).props().disabled).toEqual(true);
    });
    it("Verify that after changing the value of the two inputs, the button is enabled", () => {
        const wrapper = shallow(<Login />);
        wrapper.find('input').at(0).simulate('change', { target: {name:'email', value:'doom@asd.com'}});
        wrapper.find('input').at(1).simulate('change', { target: {name:'password', value:'12345'}});
        expect(wrapper.find('input').at(2).props().disabled).toEqual(false);
    });
});

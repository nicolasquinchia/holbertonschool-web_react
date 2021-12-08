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
});

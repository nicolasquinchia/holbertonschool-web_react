import React from 'react';
import { shallow, mount } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
    afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test BodySectionWithMarginBottom Component", () => {
    it("Renders without crashing", () => {
        const wrapper = shallow(<BodySectionWithMarginBottom />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("Render correctly a BodySection component whit its props", () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="test title">
                <p>test children node</p>
            </BodySectionWithMarginBottom>
        );
        expect(wrapper.find('BodySection')).toHaveLength(1);
        expect(wrapper.find('BodySection').props().title).toEqual('test title');
    })
    // it("Render with its CSS Style", () => {
    //     const wrapper = shallow(
    //         <BodySectionWithMarginBottom title="test title">
    //             <p>test children node</p>
    //         </BodySectionWithMarginBottom>
    //     );
    //     expect(wrapper.find('.bodySectionWithMargin').first().exists()).toBeTruthy()
    // });
})
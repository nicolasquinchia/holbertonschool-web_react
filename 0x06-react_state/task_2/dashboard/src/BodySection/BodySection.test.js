import React from 'react';
import { shallow, mount } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
    afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test BodySection Component", () => {
    it("Renders without crashing", () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("Render correctly the children and one h2 element", () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        );
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('h2').text()).toEqual("test title");
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toEqual("test children node");
    })
})
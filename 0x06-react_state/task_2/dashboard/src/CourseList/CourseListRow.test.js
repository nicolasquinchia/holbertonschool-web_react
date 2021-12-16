import { shallow } from 'enzyme';
import React from 'react';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
    afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test CourseListRow component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<CourseListRow textFirstCell="Test" />);
        expect(myComp.exists()).toBeTruthy();
    });
    it("Renders one cell with colspan = 2", () => {
        const myComp = shallow(
            <CourseListRow
                isHeader={true}
                textFirstCell="Test"
            />
        );
        expect(myComp.find('th').prop('colSpan')).toEqual("2");
    });
    it("Renders two cells when textSecondCell exists", () => {
        const myComp = shallow(
            <CourseListRow
                isHeader={true}
                textFirstCell="Test"
                textSecondCell="SecondTest"
            />
        );
        expect(myComp.find('th')).toHaveLength(2);
    });
    it(" renders correctly two td elements within a tr element", () => {
        const myComp = shallow(
            <CourseListRow
                isHeader={false}
                textFirstCell="Test"
                textSecondCell="SecondTest"
            />
        );
        expect(myComp.find("tr")).toHaveLength(1);
        expect(myComp.find('tr').children('td')).toHaveLength(2);
    });
});
import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
    afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test CourseList component", () => {
    const listCourses = [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40}
    ];
    it("Renders without crashing", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBeTruthy();
    });
    it("Renders 5 different rows", () => {
        const wrapper = shallow(<CourseList listCourses={listCourses}/>);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
    it("Renders correctly if you pass an empty array", () => {
        const array = [];
        const wrapper = shallow(<CourseList listCourses={array}/>);
        expect(wrapper.find('CourseListRow')).toHaveLength(3);
    });
    it("Renders correctly if you dont pass listCourses", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('CourseListRow')).toHaveLength(3);
    });
});

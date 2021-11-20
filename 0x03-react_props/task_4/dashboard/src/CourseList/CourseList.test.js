import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';

describe("Test CourseList component", () => {
    it("Renders without crashing", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBeTruthy();
    });
    it("Renders 5 different rows", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
});

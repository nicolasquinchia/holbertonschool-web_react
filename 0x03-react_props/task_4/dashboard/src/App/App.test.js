import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CourseListRow from '../CourseList/CourseListRow';

describe("Test App Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<App />);
        expect(myComp.exists()).toBeTruthy();
    });
    it("Contains a Notifications component", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('Notifications')).toHaveLength(1);
    });
    it("Contains a Header component", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('Header')).toHaveLength(1);
    });
    it("Contains a Login component", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('Login')).toHaveLength(1);
    });
    it("Contains a Footer component", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('Footer')).toHaveLength(1);
    });
    it("CourseList is not displayed", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });
});

describe("Prop isLoggedIn is true", () => {
    it("Verify that the Login component is not render", () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('Login')).toHaveLength(0);
    });
    it("Verify that the CourseList component is render", () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('CourseList')).toHaveLength(1);
    })
});
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe("Test App Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<App />);
        expect(myComp.exists()).toBeTruthy();
    });
    it("Renders a div with the class App-header", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('.App-header')).toHaveLength(1);
    });
    it("Renders a div with the class App-body", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('.App-body')).toHaveLength(1);
    });
    it("Renders a div with the class App-footer", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('.App-footer')).toHaveLength(1);
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe("Test App Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<App />);
        expect(myComp.exists()).toBeTruthy();
    });
});
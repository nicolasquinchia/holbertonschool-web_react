import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

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
});
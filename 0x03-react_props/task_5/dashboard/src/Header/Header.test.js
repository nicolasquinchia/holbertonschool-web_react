import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';

describe("Test Header Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<Header />);
        expect(myComp.exists()).toBeTruthy();
    });
    it("Render a img tag", () => {
        const myComp = shallow(<Header />);
        expect(myComp.find('.Header img').exists()).toEqual(true);
    });
    it("Render a h1 tag", () => {
        const myComp = shallow(<Header />);
        expect(myComp.find('.Header h1').exists()).toEqual(true);
    });
});
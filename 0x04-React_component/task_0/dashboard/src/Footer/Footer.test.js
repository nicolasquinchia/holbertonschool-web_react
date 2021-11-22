import Footer from './Footer';
import { shallow } from 'enzyme';
import React from 'react';

describe("Test Footer Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<Footer />);
        expect(myComp.exists()).toBeTruthy();
    });
    it("Renders at very last the text: Copyright", () => {
        const myComp = shallow(<Footer />);
        expect(myComp.find('.Footer').text()).toContain("Copyright");
    });
});
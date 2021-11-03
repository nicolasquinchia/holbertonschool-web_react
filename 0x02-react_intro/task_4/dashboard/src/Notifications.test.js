import { React } from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe("Test Notifications Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<Notifications />);
        expect(myComp.exists()).toBeTruthy();
    });
    it("Renders three list items", () => {
        const myComp = shallow(<Notifications />);
        expect(myComp.find('li')).toHaveLength(3);
    });
    it("renders the text: Here is the list of notifications", () => {
        const myComp = shallow(<Notifications />);
        expect(myComp.find('.Notifications p').text()).toEqual("Here is the list of notifications");
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe("Test Notifications Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<Notifications />);
        expect(myComp.exists()).toBeTruthy();
    });
    it("Renders three NOtificationItem component", () => {
        const myComp = shallow(<Notifications />);
        expect(myComp.find('NotificationItem')).toBeTruthy();
    });
    it("Renders the text: Here is the list of notifications", () => {
        const myComp = shallow(<Notifications />);
        expect(myComp.find('.Notifications p').text()).toEqual("Here is the list of notifications");
    });
    it("Renders the first NotificationItem component porperly", () => {
        const myComp = shallow(<Notifications />);
        expect(myComp.find('NotificationItem').first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });
});
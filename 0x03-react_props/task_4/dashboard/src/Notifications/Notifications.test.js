import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe("Test Notifications Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<Notifications />);
        expect(myComp.exists()).toBeTruthy();
    });
    it("Renders three NotificationItem component", () => {
        const myComp = shallow(<Notifications />);
        expect(myComp.find('NotificationItem')).toBeTruthy();
    });
    it("Renders the text: Here is the list of notifications", () => {
        const myComp = shallow(<Notifications  displayDrawer={true}/>);
        expect(myComp.find('.Notifications p').text()).toEqual("Here is the list of notifications");
    });
    it("Renders the first NotificationItem component porperly", () => {
        const myComp = shallow(<Notifications displayDrawer={true} />);
        expect(myComp.find('NotificationItem').first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });
    it("Check that the menu item is being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(".menuItem")).toBeTruthy();
    });
    it("Check that the div.Notifications is not being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(".Notifications")).toHaveLength(0);
    });
    it("Check that the menu item is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(".menuItem")).toBeTruthy();
    });
    it("Check that the div.Notifications is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(".Notifications")).toHaveLength(1);
    });
});
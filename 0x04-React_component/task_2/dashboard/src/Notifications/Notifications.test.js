import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import {getLatestNotification} from '../utils/utils'

describe("Test Notifications Component", () => {
    const listNotifications = [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: {__html:getLatestNotification()}}
    ];

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
        const myComp = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
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

describe("Notifications component with list attr", () => {
    const listNotifications = [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: {__html:getLatestNotification()}}
    ];
    it("Renders correctly if you pass an empty array", () => {
        const array = [];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={array} />);
        expect(wrapper.find('NotificationItem').html()).toEqual('<li data-notification-type="default">No new notification for now</li>');
    });
    it("Renders correctly if you don’t pass the listNotifications property", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('NotificationItem').html()).toEqual('<li data-notification-type="default">No new notification for now</li>');
    });
    it("Renders it correctly and with the right number of NotificationItem", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });
    it("Not renders when listNotifications is empty the message: Here is the list of notifications", () => {
        const array = [];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={array} />);
        expect(wrapper.find('NotificationItem').html()).not.toEqual('<li data-notification-type="default">Here is the list of notifications</li>');
    });
    it("Mockup the console.log function", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        console.log = jest.fn();
        const newNotification = wrapper.instance();
        newNotification.markAsRead(3);
        expect(console.log).toHaveBeenCalledWith('Notification 3 has been marked as read');
        jest.restoreAllMocks();
    });
})
import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

describe("Test NotificationItem Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<NotificationItem />);
        expect(myComp.exists()).toBeTruthy();
    });
    it("Renders the correct html, type - value", () => {
        const myComp = shallow(<NotificationItem type='default' value='test'/>);
        expect(myComp.find('li').prop('data-notification-type')).toEqual('default');
        expect(myComp.find('li').text()).toEqual('test');
    });
    it("Renders the correct html, html prop", () => {
        const myComp = shallow(<NotificationItem html={{__html: '<u>test</u>' }}/>);
        expect(myComp.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
    });
});
import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
    afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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
        expect(myComp.html()).toEqual('<li data-notification-type="default" class="default_1tsdo2i-o_O-respon_1l6nodk"><u>test</u></li>');
    });
    it("Check that when simulating a click on the component", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" id={7} />);
        wrapper.markAsRead = jest.fn();
        const liItem = wrapper.find('li').first();
        liItem.simulate('click');
        wrapper.markAsRead(7);
        expect(wrapper.markAsRead).toHaveBeenCalledWith(7);
        jest.restoreAllMocks();
    })
});
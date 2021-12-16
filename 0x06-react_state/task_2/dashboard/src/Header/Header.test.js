import Header from './Header';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from "../App/AppContext";
import App from '../App/App';
import {user, logOut} from "../App/AppContext";

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
    afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test Header Component", () => {
    it("Renders without crashing", () => {
        const wrapper = mount(
            <AppContext.Provider value={{user, logOut}}>
                <Header />
            </AppContext.Provider>
        );
        expect(wrapper.exists()).toBeTruthy();
    });
    // it("Render a img tag", () => {
    //     const wrapper = shallow(<Header />);
    //     expect(wrapper.find('.Header img').exists()).toEqual(true);
    // });
    // it("Render a h1 tag", () => {
    //     const wrapper = shallow(<Header />);
    //     expect(wrapper.find('.Header h1').exists()).toEqual(true);
    // });
    it("Verify that the logoutSection is not created on a default context value", () => {
        const wrapper = mount(
            <AppContext.Provider value={{user, logOut}}>
                <Header />
            </AppContext.Provider>
        );
        expect(wrapper.find('#logoutSection').exists()).not.toBeTruthy();
    });
    it("Verify that the logoutSection is created, with a defined user", () => {
        const doomUser = {
            email: 'doom@slayer.com',
            password: '12345',
            isLoggedIn: true
        }
        const wrapper = mount(
            <AppContext.Provider value={{user: doomUser, logOut}}>
                <Header />
            </AppContext.Provider>
        );
        expect(wrapper.find('#logoutSection').exists()).toBeTruthy();
    });
    it("Verify that clicking on the link is calling the spy", () => {
        const spy = jest.fn();
        const doomUser = {
            email: 'doom@slayer.com',
            password: '12345',
            isLoggedIn: true
        }
        const wrapper = mount(
            <AppContext.Provider value={{user: doomUser, logOut: spy}}>
                <Header />
            </AppContext.Provider>
        );
        expect(wrapper.find('#logoutSection').exists()).toBeTruthy();
        wrapper.find('#logoutSection span').simulate('click');
        expect(spy).toHaveBeenCalled();
        jest.restoreAllMocks();
    });
});
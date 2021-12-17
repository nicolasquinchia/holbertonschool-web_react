import Footer from './Footer';
import { shallow, mount } from 'enzyme';
import React from 'react';
import AppContext from '../App/AppContext';
import { user, logOut } from '../App/AppContext'

describe("Test Footer Component", () => {
    it("Renders without crashing", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBeTruthy();
    });
    it("Renders at very last the text: Copyright", () => {
        const wrapper = mount(<Footer />);
        expect(wrapper.find('.Footer p').text()).toContain("Copyright");
    });
    it("Verify that the link is not displayed", () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user, logOut }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a').exists()).not.toBeTruthy();
    });
    it("Verify that the link is displayed when the user is logged in", () => {
        const doomUser = {
            email: 'doom@slayer.com',
            password: '12345',
            isLoggedIn: true
        };
        const wrapper = mount(
            <AppContext.Provider value={{ user: doomUser, logOut }}>
                <Footer />
            </AppContext.Provider>
        );
        expect(wrapper.find('a').exists()).toBeTruthy();
    })
});
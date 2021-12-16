import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import CourseListRow from '../CourseList/CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut} from './AppContext';
import AppContext from './AppContext';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
    afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test App Component", () => {
    it("Renders without crashing", () => {
        const myComp = shallow(<App />);
        expect(myComp.exists()).toBeTruthy();
    });
    it("Contains a Notifications component", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('Notifications')).toHaveLength(1);
    });
    it("Contains a Header component", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('Header')).toHaveLength(1);
    });
    it("Contains a Login component", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('Login')).toHaveLength(1);
    });
    it("Contains a Footer component", () => {
        const myComp = shallow(<App />);
        expect(myComp.find('Footer')).toHaveLength(1);
    });
    it("CourseList is not displayed", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });
});

describe("Prop isLoggedIn is true", () => {
    it("Verify that the Login component is not render", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login')).toHaveLength(1);
    });
    it("Verify that the CourseList component is render", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });
});


describe("Test App Class", () => {
    it("Test Log out with alert on key combination pressed", () => {
        const events = {};
        const logout = jest.fn();

        document.addEventListener = jest.fn((event, callback) => {
            events[event] = callback;
        });
    
        shallow(<App logOut={logout} />);
        window.alert = jest.fn();
        events.keydown({ key: "h", ctrlKey: true });
        expect(global.alert).toHaveBeenCalledWith("Logging you out");
        expect(logout).toHaveBeenCalled();
    
        jest.restoreAllMocks();
    });
});

describe("Test App Class with it states", () => {
    it("Verify that the default state for displayDrawner is false", () => {
        const wrapper = mount(<App />);
        expect(wrapper.state('displayDrawer')).toEqual(false);
    });
    it("Verify that after calling handleDisplayDrawer, the state should now be true", () => {
        const wrapper = mount(<App />);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toEqual(true);
    });
    it("Verify that after calling handleHideDrawer, the state should now be false", () => {
        const wrapper = mount(<App />);
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toEqual(false);
    });
    it("Verifying if the state is updated correctly instead", () => {
        const wrapper = mount(
            <AppContext.Provider value={{user, logOut}}>
                <App />
            </AppContext.Provider>
        );
        wrapper.instance().logOut();
        expect(wrapper.state().user).toEqual(user);
    });
    it("Verify that the logIn function updates the state correctly", () => {
        const doomUser = {
            email: 'doom@slayer.com',
            password: '12345',
            isLoggedIn: true
        };
        const wrapper = mount(
            <AppContext.Provider value={{user, logOut}}>
                <App />
            </AppContext.Provider>
        );
        wrapper.instance().logIn('doom@slayer.com', '12345');
        expect(wrapper.state().user).toEqual(doomUser);
    });
    it("Verify that the logOut function updates the state correctly", () => {
        const wrapper = mount(
            <AppContext.Provider value={{user, logOut}}>
                <App />
            </AppContext.Provider>
        );
        wrapper.instance().logIn('doom@slayer.com', '12345');
        wrapper.instance().logOut();
        expect(wrapper.state().user).toEqual(user);
    });

})
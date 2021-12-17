import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import { user, logOut} from './AppContext';
import AppContext from './AppContext';

const listCourses = [                                                                                      
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

// const listNotifications = [
//   {id: 1, type: "default", value: "New course available"},
//   {id: 2, type: "urgent", value: "New resume available"},
//   {id: 3, type: "urgent", html: {__html:getLatestNotification()}}
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.keyCombination = this.keyCombination.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: {__html:getLatestNotification()}}
      ]
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  handleDisplayDrawer () {
    this.setState({displayDrawer: true});
  }

  handleHideDrawer () {
    this.setState({displayDrawer: false});
  }

  keyCombination(comb) {
    if (comb.key === 'h' && comb.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      }
    });
  }

  logOut() {
    this.setState({ user: user })
  }

  markNotificationAsRead(id) {
    this.setState({listNotifications : this.state.listNotifications.filter(item => item.id !== id)});
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyCombination);
  }

  componentWillUnmount () {
    document.addEventListener("keydown", this.keyCombination);
  }

  render() {
    const { displayDrawer, user, logOut, listNotifications } = this.state;
    const value = {user, logOut}
    return (
      <AppContext.Provider value={value}>
        <Notifications 
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className="App">
          <Header />
        </div>
        <div className={css(styles.AppBody)}>
          {
            user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom>  
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn}/>
              </BodySectionWithMarginBottom> 
            )
          }
        </div>
        <BodySection title="News from the School">
          <p>
            So begins a new age of knowledge.
          </p>
        </BodySection>
        <div className={css(styles.AppFooter)}>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  AppBody: {
    height: '60vh'
  },

  AppFooter: {
    height: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'italic',
    borderTop: '3px solid #e1354b',
    fontFamily: 'Arial, Helvetica, sans-serif',
    textAlign: 'center'
  }
})


// App.propTypes = {
//   isLoggedIn: PropTypes.bool,
//   logOut: PropTypes.func
// };

// App.defaultProps = {
//   isLoggedIn: false,
//   logOut: () => {}
// };

export default App;

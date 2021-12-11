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

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const listNotifications = [
  {id: 1, type: "default", value: "New course available"},
  {id: 2, type: "urgent", value: "New resume available"},
  {id: 3, type: "urgent", html: {__html:getLatestNotification()}}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.keyCombination = this.keyCombination.bind(this);
    this.state = {displayDrawer: false};
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
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

  componentDidMount() {
    document.addEventListener("keydown", this.keyCombination);
  }

  componentWillUnmount () {
    document.addEventListener("keydown", this.keyCombination);
  }

  render() {
    const { isLoggedIn, logOut } = this.props;
    const { displayDrawer } = this.state;

    return (
      <React.Fragment>
        <Notifications 
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className="App">
          <Header />
        </div>
        <div className={css(styles.AppBody)}>
          {
            isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom>  
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
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
      </React.Fragment>
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
    fontFamily: 'Arial, Helvetica, sans-serif'
  }
})


App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

export default App;

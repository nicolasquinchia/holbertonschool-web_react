import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Notificacions from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

function App({isLoggedIn}) {
  return (
    <React.Fragment>
      <Notificacions />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
        {
          isLoggedIn ? <CourseList /> : <Login />
        }
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;

import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const close = () => {
    console.log("Close button has been clicked")
}

function Notifications({displayDrawer}) {
    return (
        <React.Fragment>
            <div className="menuItem">
                Your notifications
            </div>
            { displayDrawer &&
                <div className="Notifications">
                    <button style={{display: "inline", float:"right"}} aria-label="Close" onClick={close}>
                        <img style={{width: "10px"}} src={closeIcon} alt="Close"/>
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
                    </ul>
                </div>
            } 
        </React.Fragment>  
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
    displayDrawer: false
}

export default Notifications;
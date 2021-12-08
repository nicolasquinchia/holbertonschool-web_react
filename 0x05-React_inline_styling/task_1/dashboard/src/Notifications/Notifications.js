import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


const close = () => {
    console.log("Close button has been clicked")
}

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead (id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate (newProps) {
        return newProps.listNotifications.length > this.props.listNotifications.length
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <React.Fragment>
            <div className="menuItem">
                Your notifications
            </div>
            { displayDrawer &&
                <div className={css(styles.Notifications)}>
                    <button style={{display: "inline", float:"right"}} aria-label="Close" onClick={close}>
                        <img style={{width: "10px"}} src={closeIcon} alt="Close"/>
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {
                            listNotifications.length === 0 && (
                                <NotificationItem value="No new notification for now" />
                            )
                        }
                        {
                            listNotifications && listNotifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    html={notification.html}
                                    type={notification.type}
                                    value={notification.value}
                                    markAsRead={this.markAsRead}
                                    id={notification.id}
                                />
                            ))
                        }
                    </ul>
                </div>
            } 
        </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    Notifications: {
        border: '2px dashed #e1354b',
        padding: '10px',
        position: 'fixed',
        right: '2%',
        left: '65%'
    }
})

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default Notifications;
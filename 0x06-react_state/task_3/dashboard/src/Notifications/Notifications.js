import React from 'react';
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
    }

    // markAsRead (id) {
    //     console.log(`Notification ${id} has been marked as read`);
    // }

    // shouldComponentUpdate (newProps) {
    //     return (newProps.listNotifications.length > this.props.listNotifications.length ||
    //             newProps.displayDrawer !== this.props.displayDrawer
    //         );
    // }

    render() {
        const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;
        const showMenu = displayDrawer ? styles.noMenuItem : styles.menuItem;
        return (
            <React.Fragment>
            <div id='menuItem' className={css(showMenu)} onClick={handleDisplayDrawer}>
                Your notifications
            </div>
            { displayDrawer &&
                <div className={css(styles.Notifications)}>
                    <button id='closeButton' style={{display: "inline", float:"right"}} aria-label="Close" onClick={handleHideDrawer}>
                        <img style={{width: "10px"}} src={closeIcon} alt="Close"/>
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul className={css(styles.ulStyle)}>
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
                                    markAsRead={markNotificationAsRead}
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
const screen = {
    small: "@media screen and (max-width: 900px)",
};

const opacityKeyframes = {
    from: {
        opacity: 0.5,
    },

    to: {
        opacity: 1,
    },
};

const translateYKeyframes = {
"0%": {
    transform: "translateY(0)",
},

"50%": {
    transform: "translateY(-5px)",
},

"75%": {
    transform: "translateY(5px)",
},

"100%": {
    transform: "translateY(0)",
},
};

const styles = StyleSheet.create({
    Notifications: {
        border: '2px dashed #e1354b',
        padding: '10px',
        position: 'fixed',
        right: '2%',
        left: '65%',
        [screen.small]: {
            width: '100vw',
            height: '100vh',
            display: 'block',
            padding: 0,
            right: 0,
            left: 0,
            top: 0,
            backgroundColor: 'white',
            border: 'none',
            fontSize: '20px'
        }
    },

    menuItem: {
        textAlign: 'end',
        padding: '5px',
        paddingRight: '20px',
        fontWeight: 'bold',
        display: 'block',
        backgroundColor: "#fff8f8",
        ":hover": {
            cursor: "pointer",
            animationName: [opacityKeyframes, translateYKeyframes],
            animationDuration: "1s, 0.5s",
            animationIterationCount: 3,
        },
    },

    noMenuItem: {
        display: 'none'
    },

    ulStyle: {
        [screen.small]: {
            padding: 0
        }
    }
})

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {}
}

export default Notifications;
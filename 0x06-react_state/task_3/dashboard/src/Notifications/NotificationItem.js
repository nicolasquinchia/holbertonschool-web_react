import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, value, html, markAsRead, id } = this.props;
        const notificationStyle = type === 'default' ? styles.default : styles.urgent;
        if (html === undefined) {
            return (<li data-notification-type={type} className={css(notificationStyle, styles.respon)} onClick={() => {markAsRead(id)}}>{value}</li>);
        } else {
            return (<li data-notification-type={type} className={css(notificationStyle, styles.respon)} onClick={() => {markAsRead(id)}} dangerouslySetInnerHTML={html}></li>)
        }
    }
}

const screen = {
    small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
    default: {
        color: 'blue'
    },

    urgent: {
        color: 'red'
    },

    respon: {
        [screen.small]: {
            display: 'block',
            borderBottom: '2px solid black',
            listStyle: 'none',
            padding: '10px 8px',
            fontSize: '20px'
        }
    }
})

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number
}

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {},
    id: 0,
}

export default NotificationItem;

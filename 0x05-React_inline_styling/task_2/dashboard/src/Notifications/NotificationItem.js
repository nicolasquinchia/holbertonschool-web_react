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
            return (<li data-notification-type={type} className={css(notificationStyle)} onClick={() => {markAsRead(id)}}>{value}</li>);
        } else {
            return (<li data-notification-type={type} className={css(notificationStyle)} onClick={() => {markAsRead(id)}} dangerouslySetInnerHTML={html}></li>)
        }
    }
}

const styles = StyleSheet.create({
    default: {
        color: 'blue'
    },

    urgent: {
        color: 'red'
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

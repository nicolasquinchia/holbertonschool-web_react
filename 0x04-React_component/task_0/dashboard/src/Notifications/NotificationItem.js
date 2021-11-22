import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html}) {
    if (html === undefined) {
        return (<li data-notification-type={type}>{value}</li>);
    } else {
        return (<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    })
}

NotificationItem.defaultProps = {
    type: 'default'
}

export default NotificationItem;

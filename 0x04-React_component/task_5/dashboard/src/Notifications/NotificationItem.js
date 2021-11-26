import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, value, html, markAsRead, id } = this.props;
        if (html === undefined) {
            return (<li data-notification-type={type} onClick={() => {markAsRead(id)}}>{value}</li>);
        } else {
            return (<li data-notification-type={type} onClick={() => {markAsRead(id)}} dangerouslySetInnerHTML={html}></li>)
        }
    }
}

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

import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const close = () => {
    console.log("Close button has been clicked")
}

export default function Notifications() {
    return (
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
    );
}
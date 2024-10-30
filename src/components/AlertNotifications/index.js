import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'

import Notification from '../Notification'

const successNotification = () => (
  <Notification>
    <div className="notification-details">
      <AiFillCheckCircle className="notification-icon success" />
      <div>
        <h1 className="title success">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </div>
  </Notification>
)

const errNotification = () => (
  <Notification>
    <div className="notification-details">
      <RiErrorWarningFill className="notification-icon error" />
      <div>
        <h1 className="title error">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </div>
  </Notification>
)

const warningNotification = () => (
  <Notification>
    <div className="notification-details">
      <MdWarning className="notification-icon warning" />
      <div>
        <h1 className="title warning">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </div>
  </Notification>
)

const infoNotification = () => (
  <Notification>
    <div className="notification-details">
      <MdInfo className="notification-icon info" />
      <div>
        <h1 className="title info">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </div>
  </Notification>
)

const AlertNotifications = () => (
  <div className="bg-container">
    <div className="detailed-container">
      <h1 className="main-heading">Alert Notifications</h1>
      <div className="notifications-list">
        {successNotification()}
        {errNotification()}
        {warningNotification()}
        {infoNotification()}
      </div>
    </div>
  </div>
)

export default AlertNotifications

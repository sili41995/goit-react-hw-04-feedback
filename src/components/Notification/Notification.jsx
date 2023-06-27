import PropTypes from 'prop-types';
import css from 'components/Notification/Notification.styled';

const { Message } = css;

const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

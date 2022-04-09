import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (

    <List>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (<Item key={id}>
          <Status status={isOnline}>{isOnline}</Status>
          <Avatar src={avatar} alt='User avatar' />
          <Name>{name}</Name>
        </Item>);
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

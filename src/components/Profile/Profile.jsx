import PropTypes from 'prop-types';
import { Card, UserInfo, Avatar, Name, Tag, Location, List, Stats, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
  return <Card>
    <UserInfo>
      <Avatar
        src={avatar}
        alt='User avatar'
      />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </UserInfo>

    <List>
      <Stats>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Stats>
      <Stats>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Stats>
      <Stats>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Stats>
    </List>
  </Card>;
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
